import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRoute from './routes/userRouter.js'
import path from 'path';
import { connectDB } from './config/db.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 2000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true, }));

app.use('/user',userRoute);

const startServer = async() =>{
  await connectDB().then(() => app.listen(port, () => {console.log(`Server listening on: http://localhost:${port}`)}))
  
}

startServer();
