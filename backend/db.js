const mongoose = require('mongoose');
const mongoUrl = "mongodb+srv://supritha:suppy@cluster0.5veeqj7.mongodb.net/?retryWrites=true&w=majority"

const mongoDb = async ()=>{
    mongoose.connect(mongoUrl,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>console.log('connection successful'))
    .catch((err)=>{console.log(err)})
}

module.exports = mongoDb;