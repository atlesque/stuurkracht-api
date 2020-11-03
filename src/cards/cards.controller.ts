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
import { CardsService } from "./cards.service";
import { CardModel } from "../database/models/card.model";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";

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

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() props: Partial<CardModel>) {
    return this.cardsService.create(props);
  }

  @UseGuards(JwtAuthGuard)
  @Put(":id")
  async update(
    @Param("id", new ParseIntPipe()) id: number,
    @Body() props: Partial<CardModel>
  ) {
    return this.cardsService.update(id, props);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  async delete(@Param("id", new ParseIntPipe()) id: number) {
    return this.cardsService.delete(id);
  }
}
