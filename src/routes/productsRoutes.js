import { Router } from "express";
import { deleteProduct, getAllProducts, getOneProduct, insertProduct, updateProduct } from "../controllers/productsController.js";
const router=Router()

router.get('/getAll',getAllProducts)
router.get('/getOne/:barcode',getOneProduct)
router.post('/insertProduct',insertProduct)
router.put('/updateProduct/:barcode',updateProduct)
router.delete('/deleteProduct/:barcode',deleteProduct)


export default router