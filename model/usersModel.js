const { DataTypes } = require('sequelize')
const db = require('./../db')


const User = db.define('User',{
    'id':{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true
    },
    'name':{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
           len:{
              arg: [3,50],
              msg:"El nombfe debe contener al menos 3 caracteres y maximo de 50 caracteres"
           
        }
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

module.exports = User