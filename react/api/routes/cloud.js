import express from "express";

import { cloud } from "../controllers/cloudController.js";


import multer from "multer";
import path, { resolve } from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file);
    cb(null, path.join(resolve(), "api/public/images"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});


export const upload = multer({ storage }).single("photo");
// init router
const router = express.Router();

router.post("/", upload, cloud);
router.post("/upload");

export default router;
