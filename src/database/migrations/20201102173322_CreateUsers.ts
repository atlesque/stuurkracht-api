import * as Knex from "knex";

const tableName = "users";

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, (t) => {
    t.string("username").notNullable().primary();
    t.string("password").notNullable();

    t.dateTime("dateCreated").notNullable().defaultTo(knex.fn.now());
    t.dateTime("dateModified");
    t.string("createdBy");
    t.string("modifiedBy");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
