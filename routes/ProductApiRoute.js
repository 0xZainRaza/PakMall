const express = require('express')

const {GETallproducts, GETuserbyId, POSTcreatenewproduct, PATCHupdateproduct, DELETEremoveproductbyid} = require('../controllers/ProductApiController')

const router = express.Router()



  // Get all products
  router.get('/', GETallproducts);
  
  // Get a single product by ID
  router.get('/:id', GETuserbyId );
  
  // Add a new product
  router.post('/', POSTcreatenewproduct);
  
  // Update an existing product
  router.patch('/:id', PATCHupdateproduct);
    
  // Delete a product
  router.delete('/:id', DELETEremoveproductbyid);


  module.exports = router;
  