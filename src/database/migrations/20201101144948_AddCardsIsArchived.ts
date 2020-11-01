import * as Knex from "knex";

const tableName = "cards";
const columnName = "isArchived";

export async function up(knex: Knex) {
  return knex.schema.alterTable(tableName, (t) => {
    t.boolean(columnName).notNullable().defaultTo(false);
  });
}

export async function down(knex: Knex) {
  return knex.schema.alterTable(tableName, (t) => {
    t.dropColumn(columnName);
  });
}
