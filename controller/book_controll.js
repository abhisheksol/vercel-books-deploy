
const bookmodel = require('../model/book_models');
const express = require('express');
const app = express()

 

// ********************************=get by id book=**************************************************************//
const bookid = async (req, res) => {
    let bookbyid = req.params.id
    const gotbook = await bookmodel.findById(bookbyid)
    res.status(201).json({ gotbook })
}
 
// ********************************=get all book=**************************************************************//

const getallbook = async (req, res) => {

    let books = await bookmodel.find()
    res.status(201).send({ books }) 
}
// ********************************=add book=**************************************************************//
// 
const addbooks = async (req, res) => {
    let { name, price, author, description, available, download } = req.body;
    let image = null; // Define image variable

    if (req.file) {
        image = req.file.filename; // Store the path or URL to the uploaded image
    } else {
        // Handle the case where no file was uploaded
    }

    // Create a new book model
    const add = new bookmodel({
        name,
        price, 
        author,
        description,
        available,
        image, // Assign the image property
        download,
    }); 
 
    try {
        await add.save();
        res.status(201).json({ add });
    } catch (error) {
        // Handle any error that occurs during saving
        console.error('Error while saving the book:', error);
        res.status(500).json({ error: 'An error occurred',error:error });
    }
};


// ********************************=BOOKs update=**************************************************************//
const updatebook = async (req, res) => {
    let bookbyid = req.params.id
    let { name, price, author, description, available, download } = req.body;
    let image = null; // Define image variable

    if (req.file) {
        image = req.file.filename; // Store the path or URL to the uploaded image
    } else {
        // Handle the case where no file was uploaded
    }
    const updated_book = await bookmodel.findByIdAndUpdate(bookbyid, {
        name,
        price,
        author,
        description,
        available,
        image,  
        download
    })
    updated_book.save()
    res.status(201).json({ updated_book })
}

// ********************************=BOOKs Delete=**************************************************************//
const deletebook = async (req, res) => {
    const deleteid = req.params.id
    const deleted_book = await bookmodel.findByIdAndDelete(deleteid)

    res.status(201).json({
        deleted_book
    })
}

exports.getallbook = getallbook
exports.addbooks = addbooks
exports.bookid = bookid
exports.updatebook = updatebook
exports.deletebook = deletebook