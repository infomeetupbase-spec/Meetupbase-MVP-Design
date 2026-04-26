export const dynamic = 'force-dynamic';

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { pusherServer } from "@/lib/pusher";

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { collabId, text } = await req.json();
  const senderId = session.user.id!;

  try {
    const message = await prisma.message.create({
      data: {
        collabId,
        senderId,
        text,
      },
    });

    // Trigger Pusher event for real-time update
    await pusherServer.trigger(`collab-${collabId}`, "new-message", message);

    return NextResponse.json(message);
  } catch (error) {
    console.error("Failed to send message:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const collabId = searchParams.get("collabId");

  if (!collabId) {
    return NextResponse.json({ error: "Missing collabId" }, { status: 400 });
  }

  try {
    const messages = await prisma.message.findMany({
      where: { collabId },
      orderBy: { createdAt: "asc" },
    });

    return NextResponse.json(messages);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 });
  }
}
