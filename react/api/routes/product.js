import express from 'express'
import { createProduct,  getSingleProduct,getSingleProductSlug, updateProduct, deleteProduct , getAllProduct, searchProduct} from '../controllers/productController.js';


// init router 
const router = express.Router();


// product routes 


router.post('/',   createProduct);
router.get('/', getAllProduct);
router.get("/search", searchProduct);
router.get("/:slug", getSingleProductSlug);
router.get('/:id', getSingleProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);








export default router;