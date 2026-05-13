// TODO: Presigned URL generation requires @aws-sdk packages which have been removed.
// Re-add @aws-sdk/client-s3 and @aws-sdk/s3-request-presigner to package.json to restore.
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { error: 'Presigned URL generation is not configured' },
    { status: 501 }
  );
}
