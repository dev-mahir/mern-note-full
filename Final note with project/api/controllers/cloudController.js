import Cloud from "../models/Cloud.js";

/**
 *
 * upload photo
 * @access public
 * @route /api/cloud
 * @method post
 */

export const uploadPhoto = async (req, res, next) => {
  try {
    let photo = [];
    const data = new FormData();
    req.files.forEach((item) => {
      photo.push(item.filename);
    });

    const photos = await Cloud.create({
      ...req.body,
      photos: photo,
    });

    return res.status(200).json({
      message: "file uploaded successfully",
      photos,
    });
  } catch (error) {
    next(error);
  }
};
