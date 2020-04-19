
exports.up = function(knex) {
    return knex.schema.createTable('purchase', function( table ){
        table.string('id').primary();
        table.string('email').notNullable();
        table.date('date').notNullable();
        table.string('status').notNullable();
        table.string('payment').notNullable();
  
        table.foreign('email').references('email').inTable('user');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('purchase');
  };
  