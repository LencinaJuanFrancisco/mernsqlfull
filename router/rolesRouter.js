const  { rolesControllers} = require('../controller/rolesControllers')

const router = require('express').Router()

router.get('/',rolesControllers.listRol)
router.get('/:id',rolesControllers.listOneRol)
router.post('/',rolesControllers.createRol)
router.put('/:id',rolesControllers.updateRol)
router.delete('/:id',rolesControllers.deleteRol)

module.exports = router