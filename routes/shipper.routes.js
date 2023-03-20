const Router = require('express')
const router = new Router()
const shipperController = require('../controllers/shipper.controller')


router.post('/create-shipper', shipperController.createShipper)
router.get('/get-shippers', shipperController.getShippers)

module.exports = router