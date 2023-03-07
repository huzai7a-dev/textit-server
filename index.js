import express from 'express';
import dotenv from 'dotenv';
import connectToDb from './config/db.js';

import userRoute from './routes/user.js';

dotenv.config();
connectToDb();
const app = express();
app.use(express.json())

app.use('/', userRoute);
const port = process.env.PORT 
app.listen(port,()=> {console.log(`Server is listening on port ${port}`)})