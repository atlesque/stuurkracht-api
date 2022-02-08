import * as Knex from 'knex';

const tableName = 'messages';
const columnName = 'recipientEmail';

export async function up(knex: Knex) {
  return knex.schema.alterTable(tableName, (t) => {
    t.string(columnName).nullable().alter();
  });
}

export async function down(knex: Knex) {
  return knex.schema.alterTable(tableName, (t) => {
    t.string(columnName).notNullable().alter();
  });
}
