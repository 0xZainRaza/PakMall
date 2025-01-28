const express = require('express')

const {LoginUser , SignupUser} = require('../controllers/AuthController')


const router = express.Router()



router.use('/login', LoginUser)

router.use('/signup', SignupUser)






module.exports = router