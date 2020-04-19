const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {

    async index(req, res){
        const games = await connection('game')
        .join('platform', 'platform.id', '=', 'game.idPlatform')
        .select(['game.name', 'game.id', 'game.value', 'game.description', {platform: 'platform.name'}])

        return res.json(games);
    },

    async create(req, res){
        const { name, value, description } = req.body
        const idPlatform = req.headers.platform

        const id = crypto.randomBytes(4).toString('HEX')

        await connection('game').insert({
            id, name, value, idPlatform, description
        })

        return res.json({ id })
    },

    async delete(req, res){
        const { id } = req.params
        const platform = req.headers.platform

        const games = await connection('game')
            .where('id', id)
            .select('idPlatform')
            .first()

        if(games.idPlatform != platform){
            return res.status(401).json({ error: 'Operation not permited.'})
        }

        await connection('game').where('id', id).delete()

        return res.status(204).send()
    }
}