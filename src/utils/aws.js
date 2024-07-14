import { S3Client } from "@aws-sdk/client-s3";

export const s3Client = new S3Client({
  region: "apac",
  endpoint: process.env.R2_UPLOAD_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY,
    secretAccessKey: process.env.R2_SECRET_KEY,
  },
});
