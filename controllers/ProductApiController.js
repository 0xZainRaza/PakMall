
const Product = require('../models/ProductModel')

async function GETallproducts(req,res) {
    try {
        const allProducts = await Product.find({});
        return res.json(allProducts);
      } 
    catch (err) {
        return res.status(500).json({ error: 'Failed to fetch products' });
      }
}

async function GETuserbyId(req,res) {
    try {
        const product = await Product.findById(req.params.id).lean();
        if (!product) {
          return res.status(404).json({ message: 'Product not found' });
        }
        return res.json(product);
      } 
    catch (err) {
        return res.status(500).json({ error: 'Failed to fetch the product' });
      }
}

async function POSTcreatenewproduct(req,res){
    try {
        const { title, description, image, alt } = req.body;
        const newProduct = await Product.create({
          Title: title,
          Description: description,
          Image: image,
          Alt: alt,
        });
    
        res.status(201).json({ status: 'Product Added', product: newProduct });
      } 
    catch (err) {
        res.status(500).json({ error: 'Failed to add product' });
      }
}

async function PATCHupdateproduct(req,res){
    try {
        // Destructure the request body with capitalized keys
        const { Title, Description, Image, Alt } = req.body;
    
        // Update the product with the capitalized keys
        const updatedProduct = await Product.findByIdAndUpdate(
          req.params.id,
          { Title, Description, Image, Alt },
          { new: true } // Return the updated document
        );
    
        if (!updatedProduct) {
          return res.status(404).json({ message: 'Product not found' });
        }
    
        return res.json({ status: 'Product Updated', product: updatedProduct });
      } 
      catch (err) {
        console.error(err);  // Log error details for debugging
        return res.status(500).json({ error: 'Failed to update product' });
      }

}

async function DELETEremoveproductbyid(req,res) {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    
        if (!deletedProduct) {
          return res.status(404).json({ message: 'Product not found' });
        }
    
        return res.json({ status: 'Product Deleted', id: req.params.id });
      } 
      catch (err) {
        return res.status(500).json({ error: 'Failed to delete product' });
      }
}





module.exports = {
    GETallproducts,
    GETuserbyId,
    POSTcreatenewproduct,
    PATCHupdateproduct,
    DELETEremoveproductbyid
}