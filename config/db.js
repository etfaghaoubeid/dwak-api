const { Sequelize } = require("sequelize")

let db
try {
    db = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USERNAME,
        process.env.DB_PASSWORD,
        {
            port: process.env.DB_PORT,
            host: 'localhost',
            dialect: 'postgres'

        }
    )

} catch (error) {
    console.log("connection error : ", error.message)
}
module.exports = db;