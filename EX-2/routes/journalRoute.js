import express from 'express';
import journalistControl from '../controllers/journalistControl.js';

const router = express.Router();

router.get('/', journalistControl.getAllJournalists);
router.get('/:id', journalistControl.getJournalistById);
router.post('/', journalistControl.createJournalist);
router.put('/:id', journalistControl.updateJournalist);
router.delete('/:id', journalistControl.deleteJournalist);

export default router;