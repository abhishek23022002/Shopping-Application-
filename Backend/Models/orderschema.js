const mongodb = require('mongoose')

const orderSchema = new mongodb.Schema({
	CartItems : String,
	Price : String,
	Status : String,
	CreatedAt : Date
})

const orderModel = mongodb.model('Orders',orderSchema)

module.exports = {
	orderModel
}