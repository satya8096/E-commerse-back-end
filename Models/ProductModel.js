const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  longName: String,
  salePrice: Number,
  imgURL: String,
  specifications: Array,
  maxPrice: Number,
  emi: Number,
  description: String,
  rating: String,
  reviews: String,
  deliverycost:String,
  deliverydate:String,
  type:String,
  questions:String,
  filter: String,
});

const ProductModel = mongoose.model("shopykitproducts", ProductSchema);

module.exports = ProductModel;
