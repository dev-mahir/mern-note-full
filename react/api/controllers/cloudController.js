import createError from "../utility/createError.js";
import Cloud from "../models/Cloud.js";
import path, { resolve } from "path";

/**
 * create Employee
 * @access public
 * @route /api/v1/employee
 * @method POST
 */

export const cloud = async (req, res, next) => {
  try {



    // if (!req.body) {
    //   next(createError(400, "All fields are required"));
    // } else {
    //   const cloud = await Cloud.create({
    //     ...req.body,
    //   });
    //   res.status(201).json({
    //     message: "Cloud image uploaded",
    //     cloud,
    //   });
    // }
  } catch (error) {
    next(error);
  }
};

/**
 *
 * @access public
 * @route /api/v1/upload
 * @method POST
 */

export const expressFileUpload = async (req, res, next) => {
  try {
    const photo = req.files.photo;

    let uploadPath =
      path.join(path.resolve(), "/api/public/images") +
      Date.now() +
      req.files.photo.name;
    console.log(uploadPath);

    photo.mv(uploadPath, (err) => {
      if (err) {
        console.log(err + "fkjf");
      }
      console.log("done");
      res.send("File uploaded!");
    });
  } catch (error) {
    next(error);
  }
};
