const {Schema, model} = require('mongoose')

const Order = new Schema({
    name: {type: String, required: true},
    email: {type: String},
    phone: {type: String, required: true},
    address: {type: String, required: true},
    products: {type: [Map], of: String, required: true},
    total_price: {type: Number, required: true}
})

module.exports = model('Order', Order)