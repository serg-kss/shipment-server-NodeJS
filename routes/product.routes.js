const Router = require('express')
const router = new Router()
const productController = require('../controllers/product.controller')


router.post('/create-product', productController.createProduct)
router.put('/change-product', productController.changeProduct)
router.get('/get-products', productController.getProducts)

module.exports = router