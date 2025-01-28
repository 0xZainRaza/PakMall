const mongoose = require('mongoose')

async function connectmongodb(url){
    return mongoose.connect(url).then(() => console.log('Database Connected')).catch((err) => console.log(err));
}


module.exports = connectmongodb;