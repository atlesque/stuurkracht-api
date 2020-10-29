import { BaseModel } from "./base.model";

export class CardModel extends BaseModel {
  static tableName = "cards";

  name!: string;
  picture!: string;

  copyright?: string;
  createdBy?: string;
  modifiedBy?: string;
}
