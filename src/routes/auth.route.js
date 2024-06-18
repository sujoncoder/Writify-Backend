import express from 'express';
import { singUp } from '../controllers/auth.controller.js';

const router = express.Router();


// singin route
router.route('/signup').post(singUp); 

export default router;