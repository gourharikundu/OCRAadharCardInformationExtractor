const express=require("express");
const router=express.Router();
const { imageUploader, rootDirectoryHandler, getUploadPage } = require("../controllers/imageHandler");
const upload = require('multer')({ dest: 'uploads/' });


router.get('/',rootDirectoryHandler);
router.get('/upload', getUploadPage);
router.post('/upload', upload.single('image'), imageUploader);

module.exports=router;