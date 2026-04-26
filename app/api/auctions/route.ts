export const dynamic = 'force-dynamic';

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { startingBid, endTime } = await req.json();

  try {
    const auction = await prisma.auction.create({
      data: {
        hostId: session.user.id!,
        startingBid: Number(startingBid),
        currentBid: Number(startingBid),
        endTime: new Date(Date.now() + 72 * 60 * 60 * 1000), // 72 hours from now
        status: "ACTIVE",
      },
    });

    return NextResponse.json(auction);
  } catch (error) {
    console.error("Failed to create auction:", error);
    return NextResponse.json({ error: "Failed to create auction" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const auctions = await prisma.auction.findMany({
      where: { status: "ACTIVE" },
      include: {
        host: {
          select: {
            id: true,
            name: true,
            image: true,
            role: true,
          },
        },
      },
    });

    return NextResponse.json(auctions);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch auctions" }, { status: 500 });
  }
}
