import { BaseModel } from "./base.model";

export class UserModel extends BaseModel {
  static tableName = "users";

  username!: string;
  password!: string;

  static get idColumn() {
    return "username";
  }
}
