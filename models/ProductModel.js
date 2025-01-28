const mongoose = require('mongoose');


// Schema for Product
const ProductSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  image: { type: String, unique: true },
  alt: { type: String },
}, { timestamps: true });




// Model for Product
const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
