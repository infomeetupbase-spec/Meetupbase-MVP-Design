import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { auctionId, amount, message } = await req.json();
  const bidderId = session.user.id!;

  try {
    const result = await prisma.$transaction(async (tx) => {
      // 1. Get auction and current bidder balance
      const auction = await tx.auction.findUnique({
        where: { id: auctionId },
        lock: { mode: 'update' } // Wait for this to be free
      });

      const bidder = await tx.user.findUnique({
        where: { id: bidderId },
      });

      if (!auction || auction.status !== "ACTIVE") {
        throw new Error("Auction not found or inactive");
      }

      if (!bidder || bidder.credits < amount) {
        throw new Error("Insufficient credits");
      }

      if (amount <= auction.currentBid) {
        throw new Error("Bid must be higher than current bid");
      }

      // 2. Deduct credits from bidder
      await tx.user.update({
        where: { id: bidderId },
        data: { credits: { decrement: amount } },
      });

      // 3. Update auction current bid
      const updatedAuction = await tx.auction.update({
        where: { id: auctionId },
        data: { currentBid: amount },
      });

      // 4. Create the bid record
      const bid = await tx.bid.create({
        data: {
          auctionId,
          bidderId,
          amount,
          message,
        },
      });

      return { updatedAuction, bid };
    });

    return NextResponse.json(result);
  } catch (error: any) {
    console.error("Bidding transaction failed:", error.message);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
