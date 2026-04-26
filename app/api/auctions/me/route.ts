import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const auctions = await prisma.auction.findMany({
      where: { hostId: session.user.id! },
      include: {
        bids: {
          orderBy: { amount: "desc" },
          take: 5,
          include: {
            bidder: {
              select: {
                id: true,
                name: true,
                image: true,
              },
            },
          },
        },
      },
      orderBy: { endTime: "asc" },
    });

    return NextResponse.json(auctions);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch auctions" }, { status: 500 });
  }
}
