import express from 'express'
import { cloud } from '../controllers/cloudController.js';

// init router 
const router = express.Router();


router.post('/', cloud);







export default router;