import * as Knex from "knex";
import { CardModel } from "../models/card.model";

export async function seed(knex: Knex): Promise<any> {
  await CardModel.query(knex).insert([
    {
      name: "I love you",
      picture:
        "https://stuurkracht.be/wp-content/uploads/2018/03/9D5DE84F-0CE0-424E-84E3-F438518FAFBD-1280x960.jpeg",
      createdBy: "Alex",
    },
    {
      name: "Onmogelijk iemand te vergeten",
      picture:
        "https://stuurkracht.be/wp-content/uploads/2018/04/F70F38CC-4469-46F5-9250-91B02F31D24F.jpeg",
      createdBy: "Alex",
    },
    {
      name: "Kaars",
      picture:
        "https://stuurkracht.be/wp-content/uploads/2018/03/A72B4ADA-15E6-4EA5-BBCC-118522273BC0.jpeg",
      createdBy: "Alex",
    },
  ]);
}
