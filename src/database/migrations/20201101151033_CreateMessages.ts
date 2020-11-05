import * as Knex from "knex";

const tableName = "messages";

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, (t) => {
    // this creates an "id" column that gets auto-incremented
    t.increments();

    t.integer("cardId")
      .references("id")
      .inTable("cards")
      .notNullable()
      .onDelete("cascade");

    t.string("senderName", 100).notNullable();
    t.string("senderEmail", 320).notNullable();
    t.string("recipientName", 100).notNullable();
    t.string("recipientEmail", 320).notNullable();

    t.string("body", 2000);

    t.dateTime("dateCreated");
    t.dateTime("dateModified");
    t.string("createdBy");
    t.string("modifiedBy");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
