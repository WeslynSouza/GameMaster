const connection = require('../database/connection')

module.exports = {

    async index(req, res){
        const purchaseItens = await connection('purchaseItem')
        .join('purchase', 'purchase.id', '=', 'purchaseItem.idPurchase')
        .join('game', 'game.id', '=', 'purchaseItem.idGame')
        .select([{purchase: 'purchase.id', game: 'game.id'}, 'purchaseItem.amount'])

        return res.json(purchaseItens);
    },

    async create(req, res){
        const { amount } = req.body
        const idPurchase = req.headers.purchase
        const idGame = req.headers.game

        await connection('purchaseItem').insert({
            idPurchase, idGame, amount
        })

        return res.json({ idPurchase })
    }
}