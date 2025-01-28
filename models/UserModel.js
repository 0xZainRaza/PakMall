const { name } = require('ejs');
const mongoose = require('mongoose');


const UserSchema =  new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String , unique: true},
    password: {type: String, required: true}
})

const User = mongoose.model('User', UserSchema)

module.exports = User;

