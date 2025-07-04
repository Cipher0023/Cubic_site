import express from "express";
import { v2 as cloudinary } from "cloudinary";

const router = express.Router();

//loading enviroment variables
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
  process.env;

//configuring cloudinary
cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

router.post("/upload", async (req, res) => {
  // DESTRUCTURE IMAGE FROM REQ.BODY
  const { image } = req.body;
  try {
    // DEFINE UPLOAD OPTIONS
    const options = {
      public_id: "sample_image",
      folder: "sample",
      unique_filename: true,
      use_filename: true,
    };
    // UPLOAD IMAGE TO CLOUDINARY
    const response = await cloudinary.uploader.upload(image, options);
    // RETURN UPLOADED IMAGE DATA
    const uploadedImage = response.url;
    // RETURN COMPLETE RESPONSE
    return res.status(200).json({ uploadedImage, response });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router;
