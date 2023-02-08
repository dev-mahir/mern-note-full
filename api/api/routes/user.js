import express from 'express';
import {
  login,
  register,
  activateAccount,
  resendCode,
} from "../controllers/userController.js";

// init router 
const router = express.Router();



// user auth route 
router.post('/register', register)
router.post('/login', login)
router.post('/activate', activateAccount)
router.post("/resend-code", resendCode);





// export  router 
 export default router 