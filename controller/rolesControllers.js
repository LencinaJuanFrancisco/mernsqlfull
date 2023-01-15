const Rol = require('../models/rol')
const rolesControllers={
    listRol:async(req,res)=>{
        
        try {
            const rta = await Rol.findAll()
    
            if (rta.length == 0) return res.status(500).json({message:"ahun no hay Roles"})
    
            res.status(200).json({
                message:"Listado de Roles",
                Total:rta.length,
                data: rta
            })
            
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    },

    listOneRol: async (req,res)=>{
        const {id} = req.params
        try {
            const findOne =  await Rol.findByPk(id)
            if(findOne == null) return res.status(201).json({
                message:"Rol no encontrado"
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

    createRol:async(req,res)=>{ 
        const data = req.body
        try {
            const newUsers = await Rol.create(data)
            res.status(201).json({
                message:"Rol Creado",
                newUsers
            })
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }

    },

    updateRol: async (req,res)=>{
        const {id} = req.params
        const body = req.body
        try {
            const rta = await Rol.update(body,{
                where:{
                    id:id,
            
                    
                },
            }
            )

            if(rta == null) return res.status(201).json({message: "Rol no encontrado"}) 

            res.status(200).json({
                message: "Rol Modifivado",
                rta
            })

        } catch (error) {
            
        }
    },

    deleteRol:async(req,res)=>{
        const {id} = req.params
        try {
            const rta = await Rol.destroy({
                where:{
                    id: id
                }
            })
           
         if(rta == 0) return res.status(201).json({
            message: "Rol no encontrado"
         })
         res.status(200).json({
            message:`El rol con ID ${id} fue eliminado`
         })
        } catch (error) {
            res.status(400).json({
                message: error.error
            })
        }
    }

}

module.exports = {rolesControllers}