
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table){
    table.increments('id').primary();
    table.timestamp('dtcreated').defaultTo(knex.fn.now());
    table.string('title').notNullable();
    table.string('author').notNullable();
    table.string('image', 1024).notNullable();
    table.string('description', 2048).notNullable();
    table.integer('votes').defaultTo(0);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
