const {Schema, model} = require('mongoose')

const Shop = new Schema({
    name: {type: String, unique: true, required: true},
    products: {type: Map, of: Number, required: true}
})

module.exports = model('Shop', Shop)