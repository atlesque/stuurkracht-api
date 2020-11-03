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

@Controller("messages")
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.messagesService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id", new ParseIntPipe()) id: number) {
    return this.messagesService.findOne(id);
  }

  @Post()
  async create(@Body() props: Partial<MessageModel>) {
    return this.messagesService.create(props);
  }

  /* @Delete(":id")
  async delete(@Param("id", new ParseIntPipe()) id: number) {
    return this.messagesService.delete(id);
  } */

  /* @Put(":id")
  async update(
    @Param("id", new ParseIntPipe()) id: number,
    @Body() props: Partial<MessageModel>
  ) {
    return this.messagesService.update(id, props);
  } */
}
