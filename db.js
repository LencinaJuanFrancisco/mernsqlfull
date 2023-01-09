const {Sequelize} = require('sequelize')


const db = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,{
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    dialectOptions:{}
})

module.exports = db 