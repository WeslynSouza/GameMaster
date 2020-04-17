module.exports = {

    development: {
        client: 'sqlite3',
        connection: {
            filename: './src/database/db.sqlite'
        },
        migrations: {
            filename: './src/database/migrations'
        },
        useNullAsDefault:  true,
    }
}