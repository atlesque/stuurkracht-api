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
import { CardsService } from "./cards.service";
import { CardModel } from "../database/models/card.model";

@Controller("cards")
export class CardsController {
  constructor(private cardsService: CardsService) {}

  @Get()
  async findAll() {
    return this.cardsService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id", new ParseIntPipe()) id: number) {
    return this.cardsService.findOne(id);
  }

  @Post()
  async create(@Body() props: Partial<CardModel>) {
    return this.cardsService.create(props);
  }

  @Put(":id")
  async update(
    @Param("id", new ParseIntPipe()) id: number,
    @Body() props: Partial<CardModel>
  ) {
    return this.cardsService.update(id, props);
  }

  @Delete(":id")
  async delete(@Param("id", new ParseIntPipe()) id: number) {
    return this.cardsService.delete(id);
  }
}
