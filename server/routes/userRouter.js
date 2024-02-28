import express from 'express';
import { postLogin, postLogout, postSignUp } from '../controllers/userController.js';

const router = express.Router();


router.post('/sign-up',(req, res) => postSignUp(req,res));
router.post('/login',(req, res) => postLogin(req,res));
router.post('/logout',(req, res) => postLogout(req,res));


export default router;