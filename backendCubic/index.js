//Este arquivo faz apenas o upload de imagens para o cloudinary

import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import cors from 'cors'
import {v2 as cloudinary} from 'cloudinary'

dotenv.config()

//loading enviroment variables
const {
    PORT,
    CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET
}=process.env

//configuring cloudinary
cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
});


//starting express server
const app = express();

//configuring middleware
app.use(bodyParser.json());
app.use(cors());

app.post('/api/upload', async (req, res) => {
    // DESTRUCTURE IMAGE FROM REQ.BODY
    const { image } = req.body;
  
    try {
      // DEFINE UPLOAD OPTIONS
      const options = {
        public_id: 'sample_image',
        folder: 'sample',
        unique_filename: true,
        use_filename: true,
      };
      // UPLOAD IMAGE TO CLOUDINARY
      const response = await cloudinary.uploader.upload(image, options);
      // RETURN UPLOADED IMAGE DATA
      const uploadedImage = response.url; // You can then store the image url in your database
      // RETURN COMPLETE RESPONSE
      return res.status(200).json({ uploadedImage, response });
      // CATCH ERROR
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  });

//Create server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});