import express from 'express';
import path, { resolve} from 'path'
import multer from 'multer';
import { uploadPhoto } from '../controllers/cloudController.js';

// init router 
const router = express.Router();

// multer for slider

const storage = multer.diskStorage({

  destination: (req, file, cb) => {
    cb(null, path.join(resolve(), "/api/public/images"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});


const sliderFeatured = multer({ storage }).array('photo', 6);


// user auth route 
router.post('/upload-photo',sliderFeatured, uploadPhoto)



// export  router 
 export default router 