require('dotenv').config();
// Express config
const express = require('express')
const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.json());
// Requirements
const { saveImage, getImages, getOneImage, deleteImage, updateImage } = require('./controllers/image.controller')
const { upload, deleteFile } = require('./controllers/upload.controller')
// DB Config 
const mongoose = require('mongoose');
const MONGODB_URI = process.env.DB_MONGO_URI;
mongoose.connect(MONGODB_URI)
.then(() => console.log('Connected!'))
.catch(err => console.log(err));


// Routes
app.get('/get-images', getImages)
app.get('/get-image/:id', getOneImage)
app.post('/save-image', upload, saveImage);
app.delete('/delete-image/:id', deleteImage, deleteFile)
app.put('/update-image/:id', upload, updateImage)
// Start server
app.listen(app.get('port'), ()=>{
    console.log('Server on port: ', app.get('port'));
})