const Router = require('express')
const router = new Router()
const ShopController = require('../controllers/shopController')

router.get('/', ShopController.getShops)
router.get('/cart', ShopController.getCart)
router.post('/cart', ShopController.postCart)

module.exports = router