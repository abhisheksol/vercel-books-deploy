const mongoose = require('mongoose');


const schema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    author :{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    available:{
        type:Boolean,
        required:true
    },
    image:{
        type:String,
        contentType:String
    },
    download:{
        type:String,
        contentType:String
        
    }
    
});

module.exports=mongoose.model("Book",schema)