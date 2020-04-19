
exports.up = function(knex) {
    return knex.schema.createTable('game', function( table ){
        table.string('id').primary();
        table.string('name').notNullable();
        table.float('value').notNullable();
        table.string('idPlatform').notNullable();
        table.string('description').notNullable();
  
        table.foreign('idPlatform').references('id').inTable('platform');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('game');
  };
  