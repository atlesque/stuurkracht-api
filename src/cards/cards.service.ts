import { Inject, Injectable } from "@nestjs/common";
import { CardModel } from "../database/models/card.model";
import { ModelClass, transaction } from "objection";

@Injectable()
export class CardsService {
  constructor(@Inject("CardModel") private modelClass: ModelClass<CardModel>) {}

  findAll() {
    return this.modelClass.query();
  }

  findOne(id: number) {
    return this.modelClass.query().findById(id);
  }

  create(props: Partial<CardModel>) {
    return this.modelClass.query().insert(props).returning("*");
  }

  update(id: number, props: Partial<CardModel>) {
    return this.modelClass
      .query()
      .patch(props)
      .where({ id })
      .returning("*")
      .first();
  }

  delete(id: number) {
    return transaction(this.modelClass, async (_, trx) => {
      return this.modelClass
        .query()
        .deleteById(id)
        .returning("*")
        .first()
        .transacting(trx);
    });
  }
}
