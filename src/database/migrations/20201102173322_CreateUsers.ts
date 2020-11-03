import * as Knex from "knex";

const tableName = "users";

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, (t) => {
    // this creates an "id" column that gets auto-incremented
    t.increments();

    t.string("username").notNullable();
    t.string("password").notNullable();

    t.dateTime("dateCreated");
    t.dateTime("dateModified");
    t.string("createdBy");
    t.string("modifiedBy");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
