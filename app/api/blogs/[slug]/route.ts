import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  try {
    if (!params.slug) {
      return new NextResponse("Slug missing", { status: 400 });
    }
    const blog = await db.blogs.findFirst({
      where: { slug: params.slug, isPublished: true },
    });
    if (!blog) {
      return new NextResponse("Not found", { status: 404 });
    }
    return NextResponse.json(blog);
  } catch (error) {
    console.error("[BLOG_SLUG_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
