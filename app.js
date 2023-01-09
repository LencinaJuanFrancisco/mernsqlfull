require('dotenv').config()
const express = require('express')
const app = express()
const apiRouter = require('./router')
const db = require('./db')

app.use(express.json())

apiRouter(app)

db.sync().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`app 🏃🏃🏃🏃 en puerto ${process.env.PORT}`)
    })

}).catch((error)=>{
    console.log('no se pudo conectar a la DB------>>>> ',error);
})

