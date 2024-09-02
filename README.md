

<h3>Things I code with</h3>
<p>
  <img alt="npm" src="https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white" />
  <img alt="html5" src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-323330?style=flat-square&logo=javascript&logoColor=F7DF1E" />
  <img alt="Mysql" src="https://img.shields.io/badge/MySQL-00000F?style=flat-square&logo=mysql&logoColor=white" />
  <img alt="Css" src="https://img.shields.io/badge/CSS-239120?&style=flat-square&logo=css3&logoColor=white" />
  <img alt="git" src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white" />
  <img alt="Heroku" src="https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=heroku&logoColor=white" />
  <img alt="MongoDB" src="https://img.shields.io/badge/-MongoDB-13aa52?style=flat-square&logo=mongodb&logoColor=white" />
  <img alt="Nodejs" src="https://img.shields.io/badge/-Nodejs-43853d?style=flat-square&logo=Node.js&logoColor=white" />
  <img alt="Python" src="https://img.shields.io/badge/Python-3.9-3776AB.svg?style=flat&logo=python&logoColor=white" />
  <img alt="github" src="https://img.shields.io/badge/GitHub-181717.svg?style=flat&logo=github" />
  
</p>


# OCRAadharCardInformationExtractor
A powerful Node.js backend API designed to extract essential information from Aadhar card images, including Name, Father's Name, Date of Birth, and Aadhar Number. Built with Express for robust routing, Multer for efficient image handling, and Tesseract for accurate OCR processing. This API is fast, reliable, and easily integrable into various projects requiring Aadhar data extraction.

<h3> Key Features:</h3>

- Extracts Name, Father's Name, Date of Birth, and Aadhar Number from Aadhar card images
- Utilizes Tesseract.js for accurate OCR processing
- Efficient image handling with Multer
- Robust routing with Express.js
- Fast and reliable API responses


<h3> Tech Stack:</h3>

- Node.js
- Express.js
- Multer
- Tesseract.js
- OCR processing


<h3> API Endpoints:</h3>

- /upload: Extracts Aadhar data from uploaded image


<h3> Benefits:</h3>

- Fast and accurate Aadhar data extraction
- Easy integration with various projects (web, mobile, desktop)
- Reliable and scalable API architecture
- Secure image handling and data processing



<h3> Example Request:</h3>

      bash
      curl -X POST \
      http://localhost:3000/upload \
      -H 'Content-Type: application/x-www-form-urlencoded' \
      -F 'image=@/path/to/aadhar/image.jpg'



<h3> Response:</h3>

{
  "name": "John Doe",
  "fatherName": "Jane Doe",
  "dob": "1990-01-01",
  "gender" : "male",
  "aadharNumber": "1234 5678 9012"
}



<h3> Future Development:</h3>

- Improve OCR accuracy for varied image quality
- Add support for additional document types (e.g., PAN, Passport)
- Enhance security measures for sensitive data handling



# Installation


1. Download project from github(https://github.com/fuleswari220/OCRAadharCardInformationExtractor)  
    OR follow gitbash commands
    
    i>cd C:\\xampp\htdocs\
    
    ii>git clone https://github.com/fuleswari220/OCRAadharCardInformationExtractor
    
2. extract files in any directory you want

3. Run the following command to install all the dependencies from package.json file
      npm install

4. Just run the index.js file using the following command
      node index.js

5. open any browser and type http://localhost:3000




# ScreenShot
![Image of adduser](https://github.com/gourharikundu/OCRAadharCardInformationExtractor/blob/main/ScreenShot/1.png)  
![Image of adduser](https://github.com/gourharikundu/OCRAadharCardInformationExtractor/blob/main/ScreenShot/2.png)  





##  If you like my project hit a star button
