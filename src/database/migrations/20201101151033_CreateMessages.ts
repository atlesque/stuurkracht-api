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

    t.string("senderName").notNullable();
    t.string("senderEmail").notNullable();
    t.string("recipientName").notNullable();
    t.string("recipientEmail").notNullable();

    t.text("body");

    t.dateTime("dateCreated");
    t.dateTime("dateModified");
    t.string("createdBy");
    t.string("modifiedBy");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
