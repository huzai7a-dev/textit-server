import express from 'express';
import dotenv from 'dotenv';
import connectToDb from './config/db.js';
import cors from 'cors';

import userRoute from './routes/user.js';
import { handleError, notFound } from './middlewares/notFound.js';

dotenv.config();
connectToDb();
const app = express();
app.use(express.json())
app.use(cors())

app.use('/', userRoute);

app.use(notFound);
app.use(handleError);

const port = process.env.PORT 
app.listen(port,()=> {console.log(`Server is listening on port ${port}`)})