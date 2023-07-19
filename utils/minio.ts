import { Client, ClientOptions, ResultCallback } from "minio"

const bucketName = "thumbnail"

const minio = new Client({
  endPoint: 'localhost',
  port: 9000,
  useSSL: false,
  accessKey: 'v0ELryhqYxt54G49fmi8',
  secretKey: 'BpWXW10iMH8fWHRtriTuFJmjcWCqrsxEHvO9OKjb',
})

export const GeneratePresignedUrl = async (objectName: string) => {
  const presignedUrl = await minio.presignedGetObject(bucketName, objectName, 5); // 24 hours expiration time
  return presignedUrl
};
