
exports.up = function(knex, Promise) {
  return knex.schema.createTable('lunch', (table)=>{
    table.increments();
    table.text('name');
    table.float('rating');
    table.integer('person_id').references('person.id').unsigned().onDelete('cascade');
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('lunch');
};
