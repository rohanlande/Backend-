import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config({ path: `/.env` });   
import cookieParser from 'cookie-parser';

const app = express();
const corsOptions = {
  origin: process.env.CORS_ORIGIN, // your frontend origin
  credentials: true,               // allow cookies (if needed)
};
app.use(cors(corsOptions));

app.use(express.json({limit:'16kb'}));
app.use(express.urlencoded({extended:true, limit:'16kb'}));
app.use(express.static('public'));
app.use(cookieParser());

export {app};