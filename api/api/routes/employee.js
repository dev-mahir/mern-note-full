import express from 'express';
import { createEmployee, getAllEmployee } from '../controllers/employeeController.js';
import {
  login,
  register,
  activateAccount,
  resendCode,
} from "../controllers/userController.js";

// init router 
const router = express.Router();



// user auth route 
router.get("/", getAllEmployee);
router.post("/", createEmployee);
router.post('/activate', activateAccount)
router.post("/resend-code", resendCode);


// export  router 
 export default router 