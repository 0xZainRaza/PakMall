const express = require('express')

const {DisplayAllProducts} = require('../controllers/ProductController') 

const router = express.Router();



router.get("/", DisplayAllProducts)


module.exports = router
