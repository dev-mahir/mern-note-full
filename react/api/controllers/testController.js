import { data, foodData } from "../data.js";
import Food from "../models/Food.js";
import User from "../models/User.js";

export const userController = async () => {
  try {
    const user = await User.aggregate([{ $match: { name: /^m/i } }]);

    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
};

userController();

export const foodController = async () => {
  try {
    const food = await Food.find();

    console.log(food);
  } catch (error) {
    console.log(error.message);
  }
};

// foodController();
