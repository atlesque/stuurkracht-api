import { Inject, Injectable } from "@nestjs/common";
import { CardModel } from "../database/models/card.model";
import { ModelClass, transaction } from "objection";
// import { MessageCardService } from "../messages/message-card.service";

@Injectable()
export class CardsService {
  constructor(
    // private messageCardService: MessageCardService,
    @Inject("CardModel") private modelClass: ModelClass<CardModel>
  ) {}

  findAll() {
    return this.modelClass.query();
  }

  findOne(id: number) {
    return this.modelClass.query().findById(id);
  }

  /* create(props: Partial<CardsModel>) {
    return this.modelClass.query().insert(props).returning("*");
  } */

  /* update(id: number, props: Partial<CardsModel>) {
    return this.modelClass
      .query()
      .patch(props)
      .where({ id })
      .returning("*")
      .first();
  } */

  /* delete(id: number) {
    return transaction(this.modelClass, async (_, trx) => {
      await this.messageCardService.deleteByTagId(id).transacting(trx);

      return this.modelClass
        .query()
        .deleteById(id)
        .returning("*")
        .first()
        .transacting(trx);
    });
  } */
}
