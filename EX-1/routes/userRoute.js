import express from 'express';
import users from '../assets/user.js';
import studentControl from '../controller/studentControl.js';

const router = express.Router();

router.get('/', studentControl.getAllUsers);
router.get('/:id', studentControl.getUser);
router.post('/', studentControl.createUser);
router.put('/:id', studentControl.updateUser);
router.delete('/:id', studentControl.deleteUser);

export default router;
