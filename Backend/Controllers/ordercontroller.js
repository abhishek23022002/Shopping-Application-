const { orderModel } = require("../Models/orderschema");

async function orders(req, res) {
  console.log("DATA",req.body);  
  const cartItems = "Cart Items"
  const status = "Pending"
  const price = "3342"
  const order = await orderModel.create({
    CartItems : cartItems,  
    Status : status,
    Price : price   
  })
  res.json({
    message: "true",
    order
  });
  console.log(JSON.stringify(req.body))
}
module.exports = {
  orders
};
