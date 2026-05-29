import express from 'express';
import categoryControl from '../controllers/categoryControl.js';

const router = express.Router();

router.get('/', categoryControl.getAllCategories);
router.get('/:id', categoryControl.getCategoryById);
router.post('/', categoryControl.createCategory);
router.put('/:id', categoryControl.updateCategory);
router.delete('/:id', categoryControl.deleteCategory);

export default router;