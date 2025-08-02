import express from 'express'
import { test, updateUser } from '../Controllers/User.controller.js';
import { VerifyToken } from '../utils/Verifyuser.js';

const router = express.Router();

router.get('/test', test)
router.post('/update/:id', VerifyToken, updateUser)

export default router ;