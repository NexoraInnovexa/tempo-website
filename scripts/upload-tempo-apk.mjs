
import "dotenv/config";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import path from "node:path";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const accountId = process.env.CLOUDFLARE_R2_ACCOUNT_ID;
const accessKeyId = process.env.CLOUDFLARE_R2_ACCESS_KEY_ID;
const secretAccessKey = process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY;
const bucket = process.env.CLOUDFLARE_R2_BUCKET_NAME;

if (!accountId || !accessKeyId || !secretAccessKey || !bucket) {
  throw new Error("Missing Cloudflare R2 environment variables.");
}

const apkPath = path.resolve("public/downloads/tempo.apk");
const fileInfo = await stat(apkPath);

const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

console.log(`Uploading ${(fileInfo.size / 1024 / 1024).toFixed(2)} MB...`);

await s3.send(
  new PutObjectCommand({
    Bucket: bucket,
    Key: "tempo.apk",
    Body: createReadStream(apkPath),
    ContentLength: fileInfo.size,
    ContentType: "application/vnd.android.package-archive",
    ContentDisposition: 'attachment; filename="tempo.apk"',
  }),
);

console.log("Tempo APK uploaded successfully to Cloudflare R2.");
