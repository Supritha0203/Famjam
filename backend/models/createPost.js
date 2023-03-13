const mongoose = require('mongoose')

const imgSchema = new mongoose.Schema({
    title: String,
    img:{
        data: Buffer,
        contentType:String,
    },
    description:String,
})

module.exports = ImageModel = mongoose.model('Image', imgSchema)