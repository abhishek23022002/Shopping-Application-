const mongo = require("mongoose");

const productschema = new mongo.Schema({
  name: String,
  Price: String,
  Description: String,
  Pricing: String,
  images: [
    {
      image: String,
    },
  ],
  category: String,
  Seller: String,
  Stock: String,
  NoofReviews: String,
  CreatedAT: String,
});

const model = mongo.model("Product_Schema", productschema);
module.exports = model;
