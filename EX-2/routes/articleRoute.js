import express from 'express';
import articleControl from '../controllers/articlesControl.js';

const router = express.Router();

router.get('/', articleControl.getAllArticles);
router.get('/:id', articleControl.getArticleById);
router.post('/', articleControl.createArticle);
router.put('/:id', articleControl.updateArticle);
router.delete('/:id', articleControl.deleteArticle);

export default router;