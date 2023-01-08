require('dotenv').config()
const express = require('express')
const app = express()
const apiRouter = require('./router')

app.use(express.json())

apiRouter(app)

app.listen(process.env.PORT,()=>{
    console.log(`app 🏃🏃🏃🏃 en puerto ${process.env.PORT}`)
})
