import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
} from "@nestjs/common";
import { MessagesService } from "./messages.service";
import { MessageModel } from "../database/models/message.model";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { MailService } from "../mail/mail.service";
import HTTP from "axios";

@Controller("messages")
export class MessagesController {
  constructor(
    private messagesService: MessagesService,
    private mailService: MailService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(
    @Query("page") page: number = 0,
    @Query("pageSize") pageSize: number = 10
  ) {
    return this.messagesService.findAll(page, pageSize);
  }

  // HACK: We have to define /statistics first, otherwise /:id gets matched first
  @UseGuards(JwtAuthGuard)
  @Get("statistics")
  async getStatistics() {
    return this.messagesService.getStatistics();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.messagesService.findOne(id);
  }

  @Post()
  async create(@Body() request: any) {
    const { recaptchaResponse, ...messageProps } = request;
    const recaptchaVerificationResponse = await HTTP.post(
      "https://www.google.com/recaptcha/api/siteverify",
      null, // Use query params instead of POST body
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET,
          response: recaptchaResponse,
        },
      }
    );
    const recaptchaResult = recaptchaVerificationResponse.data;
    if (recaptchaResult.success !== true) {
      throw new Error("De reCAPTCHA verificatie is mislukt");
    }
    const newMessage = await this.messagesService.create(messageProps);
    if (newMessage.id != null) {
      try {
        await this.mailService.sendMessage(newMessage);
      } catch (err) {
        throw new Error("Fout bij versturen van email");
      }
    }
    return newMessage;
  }

  /* @Delete(":id")
  async delete(@Param("id", new ParseIntPipe()) id: number) {
    return this.messagesService.delete(id);
  } */

  /* @Put(":id")
  async update(
    @Param("id", new ParseIntPipe()) id: number,
    @Body() props: MessageModel
  ) {
    return this.messagesService.update(id, props);
  } */
}
