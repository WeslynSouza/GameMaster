const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {

    async index(req, res){
        const purchase = await connection('purchase')
        .join('user', 'user.email', '=', 'purchase.email')
        .select([
            'purchase.id',
            {user: 'user.name'},
            'purchase.email',
            'purchase.date',
            'purchase.status',
            'purchase.payment'
        ])

        return res.json(purchase)
    },

    async create(req, res){
        const { date, status, payment } = req.body
        const email = req.headers.user

        const id = crypto.randomBytes(4).toString('HEX')

        await connection('purchase').insert({
            id, email, date, status, payment
        })

        return res.json({ id })
    }
}