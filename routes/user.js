import express from 'express';
import { registerUser } from '../controllers/user.js';
import login from '../controllers/auth.js';

const router = express.Router();

router.post('/resgister', registerUser);
router.post('/login', login);

export default router