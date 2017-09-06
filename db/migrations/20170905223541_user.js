'use strict';

exports.up = function(knex, Promise) {
  return knex.schema
    .createTableIfNotExists('user', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email')
        table.string('login').unique().notNullable();
        table.string('password');
        table.boolean('active').default(false);
        table.timestamps();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('user');
};
