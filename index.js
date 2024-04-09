const express = require('express');
const app=express()
const mongoose = require('mongoose');
const routes = require('./routes/book_routes');

const cors = require('cors');
app.use(express.json()); 
app.use(cors()) 
 

mongoose.connect("mongodb+srv://abhisheksolapure2003:CkhsGUGdOyYdntTk@cluster0.nketawd.mongodb.net/abhi_book_store?retryWrites=true&w=majority").then(()=>{
    console.log("connected to db");
})
app.use(routes)
app.listen(5000)  
 
// CkhsGUGdOyYdntTk
// abhisheksolapure2003
// mongodb+srv://abhisheksolapure2003:<password>@cluster0.nketawd.mongodb.net/?retryWrites=true&w=majority
// mongodb+srv://abhisheksolapure2003:<password>@cluster0.nketawd.mongodb.net/?retryWrites=true&w=majority 