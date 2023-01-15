const  { usersControllers} = require('../controller/usersControllers')

const router = require('express').Router()

router.get('/',usersControllers.listUser)
router.get('/:id',usersControllers.listOneUser)
router.post('/',usersControllers.createUser)
router.put('/:id',usersControllers.updateUser)
router.delete('/:id',usersControllers.deleteUser)

module.exports = router