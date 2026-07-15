import dotenv from "dotenv";
dotenv.config();
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  ListObjectsV2Command,
} from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: "auto", // Required by AWS SDK, not used by R2
  // Provide your R2 endpoint: https://<ACCOUNT_ID>.r2.cloudflarestorage.com
  endpoint: `https://${process.env.ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    // Provide your R2 Access Key ID and Secret Access Key
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
});

// Upload a file
await s3.send(
  new PutObjectCommand({
    Bucket: "enrique-ciapara",
    Key: "myfile.txt",
    Body: "Hello, R2!",
  }),
);
console.log("Uploaded myfile.txt");

// Download a file
const response = await s3.send(
  new GetObjectCommand({
    Bucket: "enrique-ciapara",
    Key: "myfile.txt",
  }),
);
const content = await response.Body.transformToString();
console.log("Downloaded:", content);

// List objects
const list = await s3.send(
  new ListObjectsV2Command({
    Bucket: "enrique-ciapara",
  }),
);
console.log(
  "Objects:",
  list.Contents.map((obj) => obj.Key),
);

if (process.env.ACCESS_KEY_ID && process.env.SECRET_ACCESS_KEY) {
  console.log("ACCESS_KEY_ID and SECRET_ACCESS_KEY are set.");
} else {
  console.error("ACCESS_KEY_ID and/or SECRET_ACCESS_KEY are not set.");
}

