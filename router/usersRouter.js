const router = require('express').Router()

router.get('/',(req,res)=>{
   // res.status(200).json({message:"Lista de usuarios"})
   res.send('lista de usuarios')
    console.log("lista de usuarios");
})

module.exports = router