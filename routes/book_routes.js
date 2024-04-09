const express = require('express');
const routes = express.Router();
const multer = require('multer'); // Import multer
const bookmodel = require('../model/book_models');
const control_routes = require('../controller/book_controll');
const fs = require('fs'); 
const path = require('path');
const { get } = require('http');
  
 
routes.use(express.json())

routes.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
// Define storage for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
 
const upload = multer({ storage: storage }); // Initialize multer with the storage configuration

routes.get('/', control_routes.getallbook);
routes.get('/:id', control_routes.bookid);
routes.post('/', upload.single('file'), control_routes.addbooks); // Use multer for file upload
routes.put('/:id',upload.single('file'), control_routes.updatebook);
routes.delete('/:id', control_routes.deletebook);

module.exports = routes; 

//  http://localhost:5000/uploads/1698141617275-WIN_20221227_21_11_27_Pro.jpg