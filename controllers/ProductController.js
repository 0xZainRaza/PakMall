const Product = require('../models/ProductModel')


async function DisplayAllProducts(req,res) {
    try{

        const allproducts = await Product.find({});
        return res.render("products" , { products: allproducts })

    }
    catch (err) {
        return res.status(500).json({ error: 'Failed to fetch products' });
    }
}

module.exports = {
    DisplayAllProducts

}