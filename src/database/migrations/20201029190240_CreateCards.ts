import * as Knex from "knex";

const tableName = "cards";

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, (t) => {
    // this creates an "id" column that gets auto-incremented
    t.increments();

    t.string("name").notNullable();
    t.string("picture", 1000).notNullable();

    t.string("copyright");

    t.dateTime("dateCreated").notNullable().defaultTo(knex.fn.now());
    t.dateTime("dateModified");
    t.string("createdBy");
    t.string("modifiedBy");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
