const connection = require('../database/connection')

module.exports = {

    async index(req, res){
        const users = await connection('user').select('*')

        return res.json(users)
    },

    async create(req, res){
        const { email, name, password } = req.body 

        await connection('user').insert({
            email, name, password
        })

        return res.json({ name })
    },

    async delete(req, res){
        const { email } = req.params

        await connection('user').where('email', email).delete()

        return res.status(204).send()
    }
}