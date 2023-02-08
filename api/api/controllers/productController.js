import createError from "../utility/createError.js";
import Product from "../models/Product.js";
import { createSlug } from "../utility/createSlug.js";
import { discountCal } from "../utility/calculator.js";

/**
 * create product
 * @access public
 * @route /api/v1/product
 * @method POST
 */

export const createProduct = async (req, res, next) => {
  try {
    const { name, regular_price, discount, stock } = req.body;

    if (!name) {
      next(createError(400, "All fields are required"));
    } else {
      let slug = createSlug(name);
      const product = await Product.create({
        ...req.body,
        // photo: req.file.filename,
        slug: slug,
        stock: stock,
        regular_price: regular_price,
        sale_price: discount ? discountCal(regular_price, discount) : "",
      });
      res.status(201).json({
        message: "Product created",
        product,
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * get single product
 * @access public
 * @route /api/v1/product/:id
 * @method GET
 */

export const getSingleProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({ _id: id }).populate(
      "category",
      "name"
    );
    if (!product) {
      next(createError(404, "Product not found"));
    }
    if (product) {
      res.status(200).json({
        message: "Success",
        product,
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * get single product by slug
 * @access public
 * @route /api/v1/product/:id/slug
 * @method GET
 */

export const getSingleProductSlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const product = await Product.find({ slug: slug })
      .populate("category", "name")
      .populate("tag", "name");
    if (!product) {
      next(createError(404, "Product not found"));
    }
    if (product) {
      res.status(200).json(product);
    }
  } catch (error) {
    next(error);
  }
};

/**
 * update product
 * @access public
 * @route /api/v1/product/:id
 * @method Update
 */

export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      next(createError(400, "Product not found"));
    }
    if (id) {
      const product = await Product.findByIdAndUpdate(id, {
        ...req.body,
      });
      res.status(200).json({
        message: "Product updated successfully",
        product,
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * delete product
 * @access public
 * @route /api/v1/product/:id
 * @method DELETE
 */
export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      next(createError(400, "Product not found"));
    }
    if (id) {
      const product = await Product.findByIdAndDelete(id);
      if (!product) {
        next(createError(400, "Product not found"));
      } else {
        res.status(200).json({
          message: "Product deleted successfully",
        });
      }
    }
  } catch (error) {
    next(error);
  }
};

/**
 * Get all  product
 * @access public
 * @route /api/v1/product
 * @method GET
 */
export const getAllProduct = async (req, res, next) => {
  try {
    const data = await Product.find();

    if (!data) {
      next(createError(404, "Product not found"));
    }
    if (data) {
      res.status(200).json(data);
    }
  } catch (error) {
    next(error);
  }
};

/**
 * Search product
 * @access public
 * @route /api/v1/product/search?name=""
 * @method GET
 */

export const searchProduct = async (req, res, next) => {
  try {
    const { name, color, category, min_price, max_price } = req.query;
    console.log(min_price);

    const product = await Product.find().where('stock').equals(500)

    res.status(200).json(product);

  } catch (error) {
    next(error);
  }
};
