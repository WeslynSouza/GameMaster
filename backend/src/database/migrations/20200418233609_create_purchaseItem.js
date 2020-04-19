
exports.up = function(knex) {
    return knex.schema.createTable('purchaseItem', function( table ){
        table.string('idPurchase').notNullable();
        table.string('idGame').notNullable();
        table.string('amount').notNullable();
  
        table.foreign('idPurchase').references('id').inTable('purchase');
        table.foreign('idGame').references('id').inTable('game');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('purchaseItem');
  };
  