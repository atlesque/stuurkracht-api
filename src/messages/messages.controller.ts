import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from "@nestjs/common";
import { MessagesService } from "./messages.service";
import { MessageModel } from "../database/models/message.model";

@Controller("themes")
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

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

  @Delete(":id")
  async delete(@Param("id", new ParseIntPipe()) id: number) {
    return this.messagesService.delete(id);
  }

  @Put(":id")
  async update(
    @Param("id", new ParseIntPipe()) id: number,
    @Body() props: Partial<MessageModel>
  ) {
    return this.messagesService.update(id, props);
  }
}
