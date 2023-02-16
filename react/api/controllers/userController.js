import User from "../models/User.js";
import createError from "../utility/createError.js";
import { hassPassword, hassPasswordVerify } from "../utility/hash.js";
import { sendActivationLink } from "../utility/sendMail.js";
import { createToken } from "../utility/token.js";
import { isEmail } from "../utility/validate.js";
import cookie from "js-cookie";
import { createCode } from "../utility/createCode.js";

/**
 * @access public
 * @route /api/user/register
 * @method POST
 */
export const register = async (req, res, next) => {
  try {
    const { first_name, email, password } = req.body;

    if (!first_name || !email || !password) {
      next(createError(400, "All fields are required"));
    }
    // check email validate
    if (!isEmail(email)) {
      next(createError(400, "Invalid email"));
    }

    // check email unique
    const checkEmail = await User.findOne({ email });
    if (checkEmail) {
      next(createError(400, "Email already exists"));
    }

    // create user
    const user = await User.create({
      ...req.body,
      password: hassPassword(password),
    });

    if (user) {
      // create token
      const token = createToken({ id: user._id }, "30d");

      // create code
      const activation_code = createCode();

      // create activation link
      sendActivationLink(user.email, {
        name: user.first_name,
        code: activation_code,
      });

      // update code
      await User.findByIdAndUpdate(
        { _id: user.id },
        { access_token: activation_code }
      );

      res.status(200).cookie("userEmail", user.email).json({
        message: "Registration successfull",
        user,
        token,
      });
    }
  } catch (error) {
    console.log(error);
    next(createError(400, "There was a server side error"));
  }
};

/**
 * @access public
 * @route /api/user/activate
 * @method POST
 */
export const activateAccount = async (req, res, next) => {
  try {
    const { code, email } = req.body;
    if (!code) {
      next(createError(404, "Please set OTP code"));
    }
    if (code) {
      const user = await User.findOne({
        $and: [{ access_token: code }, { email: email }],
      });
      // if (user.isActive === true) {
      //   next(createError(400, "Account already activated"))
      // }
      if (!user) {
        next(createError(404, "Invalid OTP Code"));
      } else {
        await User.findByIdAndUpdate(user._id, {
          access_token: "",
          isActive: true,
        });
        res.status(200).json({
          message: "Account activate successfull",
        });
      }
    }
  } catch (error) {
    next(createError(error));
  }
};

/**
 * @access public
 * @route /api/user/resend-code
 * @method POST
 */
export const resendCode = async (req, res, next) => {
  try {
    const { email } = req.body;
    // find user
    const user = await User.findOne({ email: email });

    // create code
    const activation_code = createCode();

    // send code
    sendActivationLink(user.email, {
      code: activation_code,
    });

    await User.findByIdAndUpdate(user._id, {
      isActive: "false",
      access_token: activation_code,
    });

    res.status(200).json({
      message: "Activation code send to your email",
    });
  } catch (error) {
    next(createError(error));
  }
};

/**
 * @access public
 * @route /api/user/login
 * @method POST
 */
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      next(createError(400, "All fields are required"));
    }
    if (!isEmail(email)) {
      next(createError(400, "Invalid Email Address"));
    }

    // email check
    const loginUser = await User.findOne({ email });
    if (!loginUser) {
      next(createError(400, "Invalid Email"));
    }

    if (!hassPasswordVerify(password, loginUser.password)) {
      next(createError(400, "Wrong password"));
    } else {
      // create token
      const token = createToken({ id: loginUser._id }, "364d");

      res.status(200).cookie("authToken", token).json({
        message: "User login successfull",
        user: loginUser,
        token,
      });
    }
  } catch (error) {
    next(createError(400, "There was a server side error"));
  }
};
