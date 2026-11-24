
import { NextResponse } from "next/server";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// export const runtime = "nodejs";
// export const dynamic = "force-dynamic";

const accountId = process.env.CLOUDFLARE_R2_ACCOUNT_ID!;
const accessKeyId = process.env.CLOUDFLARE_R2_ACCESS_KEY_ID!;
const secretAccessKey = process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY!;
const bucket = process.env.CLOUDFLARE_R2_BUCKET_NAME!;

const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

export async function GET() {
  try {
    if (!accountId || !accessKeyId || !secretAccessKey || !bucket) {
      throw new Error("R2 environment variables are missing.");
    }

    const command = new GetObjectCommand({
      Bucket: bucket,
      Key: "tempo.apk",
      ResponseContentType: "application/vnd.android.package-archive",
      ResponseContentDisposition: 'attachment; filename="tempo.apk"',
    });

    const signedUrl = await getSignedUrl(s3, command, {
      expiresIn: 604800, // 7 days
    });

    return NextResponse.redirect(signedUrl, {
      status: 302,
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    });
  } catch (error) {
    console.error("Tempo APK download error:", error);

    return NextResponse.json(
      { error: "Unable to generate the download link. Please try again." },
      { status: 500 },
      );
  }
}
