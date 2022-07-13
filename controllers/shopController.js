const Shop = require('../models/Shop')
const Order = require('../models/Order')

class ShopController {
    async getShops(req, res){
        try{
            const shops = await Shop.find()
            res.render('../view/index.ejs', {shops})
        }catch (e) {
            console.log(e);
            res.status(400).end('404')
        }
    }
    async getCart(req, res){
        try{
            res.render('../view/cart.ejs')
        }catch (e) {
            console.log(e);
            res.status(400).end('404')
        }
    }
    async postCart(req, res){
        try{
            const {name, email, phone, address, products} = req.body
            const parsedProducts = JSON.parse(products)
            let total_price = 0
            for (const product of parsedProducts) {
                total_price += (Number(product.price)*product.count)
            }
            const createdOrder = await Order.create({name, email, phone, address, products: parsedProducts, total_price})
            res.render('../view/cart.ejs')
        }catch (e) {
            console.log(e);
            res.status(400).end('404')
        }
    }
}

module.exports = new  ShopController()