const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Company name must be provided']
    },
    desc:{
        type:String,
        required:[true, 'Please provide some description']
    },
    role:{
        type:String,
        required:[true, 'Please provide the role you are applying for']
    }
})

module.exports = mongoose.model('Comp', Schema)