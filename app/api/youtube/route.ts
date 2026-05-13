import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const videos = await db.youTube.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(videos);
  } catch (error) {
    console.error("[YOUTUBE_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const values = await req.json();

    const video = await db.youTube.create({
      data: {
        link: values.link,
      },
    });

    return NextResponse.json(video);
  } catch (error) {
    console.error("[VIDEO_CREATE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
