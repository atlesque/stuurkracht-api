import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from "@nestjs/common";
import { MessagesService } from "./messages.service";
import { MessageModel } from "../database/models/message.model";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { MailService } from "../mail/mail.service";

@Controller("messages")
export class MessagesController {
  constructor(
    private messagesService: MessagesService,
    private mailService: MailService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.messagesService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.messagesService.findOne(id);
  }

  @Post()
  async create(@Body() props: MessageModel) {
    const newMessage = await this.messagesService.create(props);
    if (newMessage.id != null) {
      this.mailService.sendMessage(newMessage);
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
