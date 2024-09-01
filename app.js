const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const router=require("./routes/routes");

const app = express();

app.use(cors());
app.use(express.static('uploads'));

// Set up Multer for file handling
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Append extension
    }
});

// const upload = multer({ storage });

app.use(express.urlencoded({extended:true}));
app.use(router);

app.use((req,res)=>{
    res.send("<h2>404 Not Found !!</h2>")
})


module.exports=app;