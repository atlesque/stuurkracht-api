import { Global, Module } from "@nestjs/common";
import { S3FileUploadService } from "../s3-file-upload/s3-file-upload.service";
import { CardsController } from "./cards.controller";
import { CardsService } from "./cards.service";

@Global()
@Module({
  controllers: [CardsController],
  providers: [CardsService, S3FileUploadService],
  exports: [CardsService],
})
export class CardsModule {}
