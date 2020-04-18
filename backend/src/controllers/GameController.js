const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {

    async index(req, res){
        const games = await connection('game').select('*');

        return res.json(games);
    },

    async create(req, res){
        const { name, value, description } = req.body
        const idPlatform = req.headers.authorization

        const id = crypto.randomBytes(4).toString('HEX')

        await connection('game').insert({
            id, name, value, idPlatform, description
        })

        return res.json({ id })
    }
}