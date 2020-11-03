import { Inject, Injectable } from "@nestjs/common";
import { UserModel } from "../database/models/user.model";
import { ModelClass } from "objection";

@Injectable()
export class UsersService {
  constructor(@Inject("UserModel") private modelClass: ModelClass<UserModel>) {}

  findOne(username: string) {
    return this.modelClass.query().findById(username);
  }
}
