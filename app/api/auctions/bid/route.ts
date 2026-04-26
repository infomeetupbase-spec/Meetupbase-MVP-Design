import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { pusherServer } from "@/lib/pusher";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { auctionId, amount, message } = await req.json();
  const userId = session.user.id!;

  try {
    const result = await prisma.$transaction(async (tx) => {
      const auction = await tx.auction.findUnique({
        where: { id: auctionId },
        include: { host: true },
      });

      if (!auction || auction.status !== "ACTIVE") {
        throw new Error("Auction not found or not active");
      }

      if (amount <= auction.currentBid) {
        throw new Error("Bid must be higher than current bid");
      }

      // Check user credits
      const user = await tx.user.findUnique({ where: { id: userId } });
      if (!user || user.credits < amount) {
        throw new Error("Insufficient credits");
      }

      // Deduct credits from new bidder
      await tx.user.update({
        where: { id: userId },
        data: { credits: { decrement: amount } },
      });

      // Find previous highest bid to refund
      const previousHighestBid = await tx.bid.findFirst({
        where: { auctionId },
        orderBy: { amount: 'desc' },
      });

      if (previousHighestBid) {
        // Refund previous highest bidder
        await tx.user.update({
          where: { id: previousHighestBid.bidderId },
          data: { credits: { increment: previousHighestBid.amount } },
        });
      }

      // Create bid
      const bid = await tx.bid.create({
        data: {
          auctionId,
          bidderId: userId,
          amount,
          message,
        },
      });

      // Update auction
      const updatedAuction = await tx.auction.update({
        where: { id: auctionId },
        data: { currentBid: amount },
      });

      return { bid, updatedAuction, auction };
    });

    // Trigger Pusher event
    await pusherServer.trigger(`auction-${auctionId}`, "new-bid", {
      auctionId,
      amount,
      bidderId: userId,
    });

    return NextResponse.json(result);
  } catch (error: any) {
    console.error("Failed to place bid:", error);
    return NextResponse.json({ error: error.message || "Failed to place bid" }, { status: 400 });
  }
}
