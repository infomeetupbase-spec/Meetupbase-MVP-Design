import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id!;

  try {
    const collabs = await prisma.collaboration.findMany({
      where: {
        OR: [
          { brandId: userId },
          { creatorId: userId },
        ],
      },
      include: {
        brand: {
          select: {
            name: true,
            image: true,
          },
        },
        creator: {
          select: {
            name: true,
            image: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(collabs);
  } catch (error) {
    console.error("Failed to fetch collabs:", error);
    return NextResponse.json({ error: "Failed to fetch collabs" }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { collabId, status } = await req.json();

  try {
    const collab = await prisma.collaboration.update({
      where: { id: collabId },
      data: { status },
      include: {
        brand: { select: { name: true, image: true } },
        creator: { select: { name: true, image: true } },
      },
    });

    return NextResponse.json(collab);
  } catch (error) {
    console.error("Failed to update collab:", error);
    return NextResponse.json({ error: "Failed to update collab" }, { status: 500 });
  }
}
