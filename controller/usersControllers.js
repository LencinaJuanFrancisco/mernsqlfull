const User = require('../model/usersModel')
const usersControllers={
    listUser:async(req,res)=>{
        
        try {
            const rta = await User.findAll()
    
            if (rta.length == 0) return res.status(500).json({message:"ahun no hay usuarios"})
    
            res.status(200).json({
                message:"Listado de usuario",
                Total:rta.length,
                data: rta
            })
            
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    },

    listOneUser: async (req,res)=>{
        const {id} = req.params
        try {
            const findOne =  await User.findByPk(id)
            if(findOne == null) return res.status(201).json({
                message:"usuario no encontrado"
            }) 

            res.status(200).json({
                findOne
            })
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    },

    createUser:async(req,res)=>{ 
        const data = req.body
        try {
            const newUsers = await User.create(data)
            res.status(201).json({
                message:"Usuario Creado",
                newUsers
            })
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }

    },

    updateUser: async (req,res)=>{
        const {id} = req.params
        const body = req.body
        try {
            const rta = await User.update(body,{
                where:{
                    id:id,
            
                    
                },
            }
            )

            if(rta == null) return res.status(201).json({message: "usuario no encontrado"}) 

            res.status(200).json({
                message: "Usuario Modifivado",
                rta
            })

        } catch (error) {
            
        }
    },

    deleteUser:async(req,res)=>{
        const {id} = req.params
        try {
            const rta = await User.destroy({
                where:{
                    id: id
                }
            })
           
         if(rta == 0) return res.status(201).json({
            message: "Usuario no encontrado"
         })
         res.status(200).json({
            message:`El usuario con ID ${id} fue eliminado`
         })
        } catch (error) {
            res.status(400).json({
                message: error.error
            })
        }
    }

}

module.exports = {usersControllers}