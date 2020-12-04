import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { CardsService } from "./cards.service";
import { CardModel } from "../database/models/card.model";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { FileInterceptor } from "@nestjs/platform-express/multer/interceptors/file.interceptor";
import { S3FileUploadService } from "../s3-file-upload/s3-file-upload.service";
import { v4 as uuid } from "uuid";

@Controller("cards")
export class CardsController {
  constructor(
    private cardsService: CardsService,
    private s3FileUploadService: S3FileUploadService
  ) {}

  @Get()
  async findAll() {
    return this.cardsService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id", new ParseIntPipe()) id: number) {
    return this.cardsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(FileInterceptor("picture"))
  async create(
    @Body() request: any,
    @UploadedFile() imageFile,
    @Req() rawRequest
  ) {
    if (imageFile.mimetype.includes("image/") === false) {
      throw new Error("File is not an image");
    }
    const uuidPrefix = uuid();
    const fileUrl = await this.s3FileUploadService.uploadImage(
      imageFile,
      `stuurkracht/card/${uuidPrefix}-${imageFile.originalname}`
    );
    const newCard: Partial<CardModel> = {
      name: request.name,
      picture: `https://${process.env.S3_ENDPOINT_URL}/${process.env.S3_BUCKET_NAME}/${fileUrl}`,
      createdBy: rawRequest.user.username,
    };
    if (request.copyright != null && request.copyright.length > 0) {
      newCard.copyright = request.copyright;
    }
    return this.cardsService.create(newCard);
  }

  @UseGuards(JwtAuthGuard)
  @Put(":id")
  async update(
    @Param("id", new ParseIntPipe()) id: number,
    @Body() props: CardModel
  ) {
    return this.cardsService.update(id, props);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  async delete(@Param("id", new ParseIntPipe()) id: number) {
    return this.cardsService.delete(id);
  }
}
