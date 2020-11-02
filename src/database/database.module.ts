import { Global, Module } from "@nestjs/common";
import * as Knex from "knex";
import { knexSnakeCaseMappers, Model } from "objection";
import { CardModel } from "./models/card.model";
import { MessageModel } from "./models/message.model";
// import { MessageCardModel } from "./models/message-card.model";

const models = [CardModel, MessageModel /* , MessageCardModel */];

const modelProviders = models.map((model) => {
  return {
    provide: model.name,
    useValue: model,
  };
});

const providers = [
  ...modelProviders,
  {
    provide: "KnexConnection",
    useFactory: async () => {
      const knex = Knex({
        client: "pg",
        connection: process.env.DATABASE_URL,
        debug: process.env.KNEX_DEBUG === "true",
        ...knexSnakeCaseMappers(),
      });

      Model.knex(knex);
      return knex;
    },
  },
];

@Global()
@Module({
  providers: [...providers],
  exports: [...providers],
})
export class DatabaseModule {}
