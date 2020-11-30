import { Injectable } from "@nestjs/common";
import * as aws from "aws-sdk";

@Injectable()
export class S3FileUploadService {
  public S3_BUCKET_NAME: string = process.env.S3_BUCKET_NAME;
  // Made for DigitalOcean Spaces. Might need to be adapted to work with regular AWS S3
  public s3: aws.S3 = new aws.S3({
    endpoint: new aws.Endpoint(process.env.S3_ENDPOINT_URL),
  });

  constructor() {
    aws.config.update({
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_ACCESS_SECRET,
    });
  }

  public uploadImage(file: any, urlKey: string): Promise<string> {
    return this.s3
      .putObject({
        Body: file.buffer,
        Bucket: this.S3_BUCKET_NAME,
        Key: urlKey,
        ACL: "public-read",
        ContentType: file.mimetype,
      })
      .promise()
      .then(
        (data) => {
          return urlKey;
        },
        (err) => {
          return err;
        }
      );
  }
}
