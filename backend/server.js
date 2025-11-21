import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import loginRoutes from './routes/login.route.js';

dotenv.config();

const app = express();
app.use(express.json()); //allows us use json body in requests

app.use('/api', loginRoutes)

app.listen(3000, () => {
    connectDB();
    console.log('Server is running on port 3000');
});
