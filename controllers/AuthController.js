const User = require('../models/UserModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


async function LoginUser(req,res) {

    if (req.method === 'GET'){
        res.render('login')
    }

    if (req.method === 'POST' ){
        try {
            const { email, password } = req.body;
            
            
            const user = await User.findOne({ email: email });

            
            if (!user || !(await bcrypt.compare(password, user.password))) {
                return res.render('login', { error: "Email or password incorrect" });
           }

           const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
            expiresIn: '1h',
            });
            
            res.cookie('Authorization', token)
            console.log(token)
           res.redirect('/dashboard');

        } 
        catch (err){
            console.error(error);
            res.status(500).send("An error occurred during login.");
        }


    }    
}

async function SignupUser(req,res) {

    if (req.method === 'GET' ){
        res.render('signup')
    }
    
    if (req.method === 'POST'){
        try {
            const { name, email, password, confirmPassword } = req.body;
            
            if (password != confirmPassword){
                res.render('signup' , { error: "Passwords do not match" } )
            }

            const Hashedpassword = await bcrypt.hash(password, 10);
            const user = await User.create({
                name: name,
                email: email,
                password: Hashedpassword
            })

            res.render('signup',  { success: "Account successfully created!"} )
        }
        catch (error){
            console.error(error);
            res.status(500).send("An error occurred during signup.");
        }

    }


}





module.exports = {
    LoginUser,
    SignupUser
}