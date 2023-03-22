const Router = require('express')
const router = new Router()
const contractController = require('../controllers/contract.controller')


router.post('/create-contract', contractController.createContract)
router.get('/get-contracts', contractController.getContracts)
router.put('/change-contract', contractController.changeContract)
router.post('/delete-contract', contractController.deleteContract)

module.exports = router