import * as Knex from "knex";
import { UserModel } from "../models/user.model";
const bcrypt = require("bcrypt");
const saltRounds = 10;

export async function seed(knex: Knex): Promise<any> {
  if (
    process.env.ADMIN_USERNAME != null &&
    process.env.ADMIN_PASSWORD != null
  ) {
    const passwordHash = await bcrypt.hash(
      process.env.ADMIN_PASSWORD,
      saltRounds
    );
    await UserModel.query(knex).insert([
      {
        username: process.env.ADMIN_USERNAME,
        password: passwordHash,
      },
    ]);
  }
}
