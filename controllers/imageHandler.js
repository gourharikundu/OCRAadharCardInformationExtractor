const path=require("path")
const Tesseract = require('tesseract.js');
const fs = require('fs');


exports.imageUploader=(req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    const imagePath = path.join(__dirname, '/../uploads', req.file.filename);
    // console.log(imagePath);
    Tesseract.recognize(
        imagePath,
        'eng'
    ).then(({ data: { text } }) => {
        // Log the raw OCR output
        // console.log('OCR Output:', text);

        // Using regex to extract specific information
        const nameMatch = text.match(/([A-Za-z\s]+)(?=\n.*\n.*Father\s*:\s*[A-Za-z\s]+)/);
        const fatherNameMatch = text.match(/Father\s*:\s*([A-Za-z\s]+)/);
        const dobMatch = text.match(/(\d{2}[\/\-]\d{2}[\/\-]\d{4})/);
        const genderMatch = text.match(/\b(Male|Female)\b/i);
        const aadhaarMatch = text.match(/\b\d{4}\s\d{4}\s\d{4}\b/);


        const extractedData = {
            name: nameMatch ? nameMatch[1].trim() : 'Not Found',
            fatherName: fatherNameMatch ? fatherNameMatch[1].trim() : 'Not Found',
            dob: dobMatch ? dobMatch[1] : 'Not Found',
            gender: genderMatch ? genderMatch[1] : 'Not Found',
            aadhaarNumber: aadhaarMatch ? aadhaarMatch[0].replace(/\s+/g, '') : 'Not Found'
        };

        // Log the extracted information
        console.log('Extracted Information:', extractedData);

        res.json({
            message: 'Information extracted successfully.',
            data: extractedData
        });

        fs.unlinkSync(imagePath);
    }).catch(err => {
        res.status(500).json({ message: 'Error processing image', error: err });
    });
}

exports.rootDirectoryHandler=(req,res)=>{
    // res.send(`<h1 style="text-align:center;">404 Not Found</h1>`);
    res.sendFile(path.join(__dirname+"/../views/error.html"))
}

exports.getUploadPage=(req,res)=>{
    // res.send(`<h1 style="text-align:center;">404 Not Found</h1>`);
    res.sendFile(path.join(__dirname+"/../views/index.html"))
}