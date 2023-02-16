import createError from "../utility/createError.js";
import Employee from "../models/Employee.js";
import Cloud from "../models/Cloud.js";

/**
 * create Employee
 * @access public
 * @route /api/v1/employee
 * @method POST
 */

export const  cloud = async (req, res, next) => {
  try {
    if (!req.body) {
      next(createError(400, "All fields are required"));
    } else {
      const cloud = await Cloud.create({
        ...req.body,
        image:req.body.me
      });
      res.status(201).json({
        message: "Cloud image uploaded",
        cloud,
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * get single Employee
 * @access public
 * @route /api/v1/Employee/:id
 * @method GET
 */

export const getSingleEmployee = async (req, res, next) => {
  try {
    const { id } = req.params;
    const Employee = await Employee.findOne({ _id: id }).populate(
      "category",
      "name"
    );
    if (!Employee) {
      next(createError(404, "Employee not found"));
    }
    if (Employee) {
      res.status(200).json({
        message: "Success",
        Employee,
      });
    }
  } catch (error) {
    next(error);
  }
};




/**
 * update Employee
 * @access public
 * @route /api/v1/Employee/:id
 * @method Update
 */

export const updateEmployee = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      next(createError(400, "Employee not found"));
    }
    if (id) {
      const Employee = await Employee.findByIdAndUpdate(id, {
        ...req.body,
      });
      res.status(200).json({
        message: "Employee updated successfully",
        Employee,
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * delete Employee
 * @access public
 * @route /api/v1/Employee/:id
 * @method DELETE
 */
export const deleteEmployee = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      next(createError(400, "Employee not found"));
    }
    if (id) {
      const Employee = await Employee.findByIdAndDelete(id);
      if (!Employee) {
        next(createError(400, "Employee not found"));
      } else {
        res.status(200).json({
          message: "Employee deleted successfully",
        });
      }
    }
  } catch (error) {
    next(error);
  }
};





/**
 * Get all  Employee
 * @access public
 * @route /api/v1/employee
 * @method GET
 */
export const getAllEmployee = async (req, res, next) => {
  try {
    const data = await Employee.find();
    if (!data) {
      next(createError(404, "Employee not found"));
    }
    if (data) {
      res.status(200).json(data);
    }
  } catch (error) {
    next(error);
  }
};

/**
 * Search Employee
 * @access public
 * @route /api/v1/Employee/search?name=""
 * @method GET
 */

export const searchEmployee = async (req, res, next) => {
  try {
    const { name, color, category, min_price, max_price } = req.query;
    console.log(min_price);

    const Employee = await Employee.find().where('stock').equals(500)

    res.status(200).json(Employee);

  } catch (error) {
    next(error);
  }
};
