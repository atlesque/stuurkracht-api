import * as Knex from "knex";
import { CardModel } from "../models/card.model";

export async function seed(knex: Knex): Promise<any> {
  await CardModel.query(knex).insert([
    {
      name: "I love you",
      picture:
        "https://content.stuurkracht.be/atlesque/stuurkracht/card/i-love-you.jpeg",
      createdBy: "alex",
    },
    {
      name: "Onmogelijk iemand te vergeten",
      picture:
        "https://content.stuurkracht.be/atlesque/stuurkracht/card/onmogelijk-iemand-te-vergeten.jpeg",
      createdBy: "alex",
    },
    {
      name: "Kaars",
      picture:
        "https://content.stuurkracht.be/atlesque/stuurkracht/card/kaars.jpeg",
      createdBy: "alex",
    },
    {
      name: "Gekleurd boeket in vaas",
      picture:
        "https://content.stuurkracht.be/atlesque/stuurkracht/card/gekleurd-boeket-in-vaas.jpeg",
      createdBy: "alex",
    },
    {
      name: "In verbondenheid",
      picture:
        "https://content.stuurkracht.be/atlesque/stuurkracht/card/in-verbondenheid.jpeg",
      createdBy: "alex",
    },
    {
      name: "Ik vind geen woorden",
      picture:
        "https://content.stuurkracht.be/atlesque/stuurkracht/card/ik-vind-geen-woorden.jpeg",
      createdBy: "alex",
    },
    {
      name: "Tussen de liefde en de leegte",
      picture:
        "https://content.stuurkracht.be/atlesque/stuurkracht/card/tussen-de-liefde-en-de-leegte.jpeg",
      createdBy: "alex",
    },
    {
      name: "Een dikke knuffel",
      picture:
        "https://content.stuurkracht.be/atlesque/stuurkracht/card/een-dikke-knuffel.jpeg",
      createdBy: "alex",
    },
    {
      name: "Ik stuur je zon, licht en liefde",
      picture:
        "https://content.stuurkracht.be/atlesque/stuurkracht/card/ik-stuur-je-zon-licht-en-liefde.jpeg",
      createdBy: "alex",
    },
    {
      name: "Ik denk aan jou",
      picture:
        "https://content.stuurkracht.be/atlesque/stuurkracht/card/ik-denk-aan-jou.jpeg",
      createdBy: "alex",
    },
    {
      name: "Iris bloemen",
      picture:
        "https://content.stuurkracht.be/atlesque/stuurkracht/card/iris-bloemen.jpeg",
      createdBy: "alex",
    },
    {
      name: "Camille bloem",
      picture:
        "https://content.stuurkracht.be/atlesque/stuurkracht/card/camille-bloem.jpeg",
      createdBy: "alex",
    },
    {
      name: "Kunstwerk lachende zon in steen",
      picture:
        "https://content.stuurkracht.be/atlesque/stuurkracht/card/kunstwerk-lachende-zon-in-steen.jpeg",
      createdBy: "alex",
    },
    {
      name: "Witte roos bij kaarslicht",
      picture:
        "https://content.stuurkracht.be/atlesque/stuurkracht/card/witte-roos-bij-kaarslicht.jpeg",
      createdBy: "alex",
    },
    {
      name: "Gedicht: Je blijft in mij",
      picture:
        "https://content.stuurkracht.be/atlesque/stuurkracht/card/gedicht-je-blijft-in-mij.jpeg",
      createdBy: "alex",
    },
    {
      name: "Kaars",
      picture:
        "https://content.stuurkracht.be/atlesque/stuurkracht/card/kaars-2.jpg",
      createdBy: "alex",
    },
    {
      name: "Reflectie van glasraam",
      picture:
        "https://content.stuurkracht.be/atlesque/stuurkracht/card/reflectie-van-glasraam.jpeg",
      createdBy: "alex",
    },
    {
      name: "Vioolspeler",
      picture:
        "https://content.stuurkracht.be/atlesque/stuurkracht/card/vioolspeler.jpg",
      createdBy: "alex",
    },
    {
      name: "Zonsondergang aan zee",
      picture:
        "https://content.stuurkracht.be/atlesque/stuurkracht/card/zonsondergang-aan-zee.jpg",
      createdBy: "alex",
    },
    {
      name: "Theelichtjes in hartenvorm",
      picture:
        "https://content.stuurkracht.be/atlesque/stuurkracht/card/theelichtjes-in-hartenvorm.jpg",
      createdBy: "alex",
    },
  ]);
}
