const connection = require('../database/connection')

module.exports = {

    async index(req, res){
        const client = await connection('client').select('*')

        return res.json(client)
    },

    async create(req, res){
        const { email, name, password } = req.body 

        await connection('user').insert({
            email, name, password
        })

        return res.json({ name })
    }
}