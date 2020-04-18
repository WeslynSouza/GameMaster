const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {

    async index(req, res){
        const platforms = await connection('platform').select('*');

        return res.json(platforms);
    },

    async create(req, res){
        const { name } = req.body

        const id = crypto.randomBytes(4).toString('HEX')

        await connection('platform').insert({
            id, name
        })

        return res.json({ id })
    }
}