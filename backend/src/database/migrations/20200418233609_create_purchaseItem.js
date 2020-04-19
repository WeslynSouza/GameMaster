
exports.up = function(knex) {
    return knex.schema.createTable('purchaseItem', function( table ){
        table.string('idPurchase').primary();
        table.string('idGame').notNullable();
        table.integer('amount').notNullable();
  
        table.foreign('idPurchase').references('id').inTable('purchase');
        table.foreign('idGame').references('id').inTable('game');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('purchaseItem');
  };
  