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
    {
      name: "Gekleurd boeket in vaas",
      picture:
        "https://stuurkracht.be/wp-content/uploads/2018/03/76928828-140C-48EA-84C7-92820909F8D6.jpeg",
      createdBy: "Alex",
    },
    {
      name: "In verbondenheid",
      picture:
        "https://stuurkracht.be/wp-content/uploads/2018/03/87E0F919-99F9-4A49-91B7-352127DD9695-1280x1280.jpeg",
      createdBy: "Alex",
    },
    {
      name: "Ik vind geen woorden",
      picture:
        "https://stuurkracht.be/wp-content/uploads/2018/03/B1068A1A-DD24-4679-8FD0-B8C24483CC03-1280x1280.jpeg",
      createdBy: "Alex",
    },
    {
      name: "Tussen de liefde en de leegte",
      picture:
        "https://stuurkracht.be/wp-content/uploads/2018/03/C934EE0E-DDBF-44BA-91C8-27FE570881CC-1280x1280.jpeg",
      createdBy: "Alex",
    },
    {
      name: "Een dikke knuffel",
      picture:
        "https://stuurkracht.be/wp-content/uploads/2018/03/A21C3BD0-E05A-4663-9553-2A460C17022D-1280x1280.jpeg",
      createdBy: "Alex",
    },
    {
      name: "Ik stuur je zon, licht en liefde",
      picture:
        "https://stuurkracht.be/wp-content/uploads/2018/03/1D460553-C100-40F7-B6E2-AF50B6155C3B.jpeg",
      createdBy: "Alex",
    },
    {
      name: "Ik denk aan jou",
      picture:
        "https://stuurkracht.be/wp-content/uploads/2018/03/52BCC4CE-9E01-4552-8FB1-507DF753E69D.jpeg",
      createdBy: "Alex",
    },
    {
      name: "Iris bloemen",
      picture:
        "https://stuurkracht.be/wp-content/uploads/2018/02/C2CB1616-1FD7-44CF-8733-33F1ABE3B582-1280x1707.jpeg",
      createdBy: "Alex",
    },
    {
      name: "Camille bloem",
      picture:
        "https://stuurkracht.be/wp-content/uploads/2018/02/2F8AC5F4-37EC-40CC-9871-6E5B3A7429FA-1280x1280.jpeg",
      createdBy: "Alex",
    },
    {
      name: "Kunstwerk lachende zon in steen",
      picture:
        "https://stuurkracht.be/wp-content/uploads/2018/02/26192CD9-CABF-49BD-BB1F-FC936685AA43-1280x1707.jpeg",
      createdBy: "Alex",
    },
    {
      name: "Witte roos bij kaarslicht",
      picture:
        "https://stuurkracht.be/wp-content/uploads/2018/02/62E64A14-602D-4986-B6A2-B3743A91CC23.jpeg",
      createdBy: "Alex",
    },
    {
      name: "Gedicht: Je blijft in mij",
      picture:
        "https://stuurkracht.be/wp-content/uploads/2018/02/741D9EB2-2F78-499A-84E5-5684DCD123ED.jpeg",
      createdBy: "Alex",
    },
    {
      name: "Kaars",
      picture:
        "https://stuurkracht.be/wp-content/uploads/2018/01/IMG_1682-e1517946669605.jpg",
      createdBy: "Alex",
    },
    {
      name: "Reflectie van glasraam",
      picture:
        "https://stuurkracht.be/wp-content/uploads/2018/02/1AD5A5D5-785F-4541-AD6B-206667415C0F.jpeg",
      createdBy: "Alex",
    },
    {
      name: "Vioolspeler",
      picture:
        "https://stuurkracht.be/wp-content/uploads/2018/02/DSC02246-web-web.jpg",
      createdBy: "Alex",
    },
    {
      name: "Zonsondergang aan zee",
      picture: "https://stuurkracht.be/wp-content/uploads/2018/01/IMG_1560.jpg",
      createdBy: "Alex",
    },
    {
      name: "Theelichtjes in hartenvorm",
      picture: "https://stuurkracht.be/wp-content/uploads/2018/01/IMG_0678.jpg",
      createdBy: "Alex",
    },
  ]);
}
