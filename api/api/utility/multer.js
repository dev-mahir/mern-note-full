import multer from "multer";
import path, { resolve } from "path";

const __dirname = resolve();

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    const filename = file.originalname.toLowerCase().split(" ").join("_");
    cb(null, Date.now() + "_" + filename);
  },
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "api/public/images"));
  },
});

export const multerPhotoUpload = multer({
  storage,
}).single("photo"); 
