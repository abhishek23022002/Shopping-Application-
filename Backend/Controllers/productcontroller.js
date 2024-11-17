const model = require("../Models/schema");

 
 
 async function products(req, res) {
 const products = await model.find({})
  res.json({
    message: "true",
    products
  });
}
 async function productsbyid(req, res) {
  console.log("dffd",req.params.id)
    const product = await model.findById(req.params.id);
    const pro =  JSON.stringify(product)
    res.json({
      message: "Single ID",
      pro,
    });
}
module.exports = {
	products,productsbyid
}


