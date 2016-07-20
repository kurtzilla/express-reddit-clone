
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(table){
    table.increments('id').primary();
    table.integer('postid').references('id').inTable('posts')
    table.timestamp('dtcreated').defaultTo(knex.fn.now());
    table.string('author').notNullable();
    table.string('text').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
