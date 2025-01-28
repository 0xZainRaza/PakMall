const express = require('express');
let path = require('path')
const cookieParser = require('cookie-parser');

const connectmongodb = require('./connection')

const authrouter = require('./routes/AuthRoute')
const productapirouter = require('./routes/ProductApiRoute')
const productrouter = require('./routes/ProductRoute')


const verifyToken = require('./middlewares/authMiddleware')

const PORT = 4000;
const app = express();

// Connection to MongoDB
connectmongodb('mongodb://127.0.0.1:27017/PakMall')


app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

// Middlewares
app.set('json spaces', 2);
app.use(express.json());
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());




app.get("/", (req,res)=>{
  res.render("home")
})

app.get("/dashboard", verifyToken, (req,res)=>{
  res.render("dashboard")
})



app.use("/products", productrouter)

app.use("/auth", authrouter)

app.use("/api/products", productapirouter)




// Start the server
app.listen(PORT, () => {
  console.log(`The server is listening on ${PORT}`);
});
