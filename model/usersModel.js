const { DataTypes } = require('sequelize')
const db = require('./../db')


db.define('User',{
    'id':{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true
    },
    'name':{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            min:3
        }
    },
    'lastName':{
        type: DataTypes.STRING,
        allowNull:false,
    },
    'address':{
        type: DataTypes.STRING
    }
})

module.exports = db