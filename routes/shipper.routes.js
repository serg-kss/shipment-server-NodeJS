const Router = require('express')
const router = new Router()
const shipperController = require('../controllers/shipper.controller')


router.post('/create-shipper', shipperController.createShipper)
router.get('/get-shippers', shipperController.getShippers)
router.put('/change-shipper', shipperController.changeShipper)
router.post('/delete-shipper', shipperController.deleteShipper)

module.exports = router