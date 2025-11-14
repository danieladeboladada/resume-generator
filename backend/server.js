import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Credential from './models/credentials.model.js';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/login', async (req, res) => {
    const login_credentials = req.body;

    if (!login_credentials.user_name || !login_credentials.encr_password) {
        return res.status(400).json({ success: false, message: 'Username and password are required' });
    }

    const newCredential = new Credential({login_credentials});

    try {
        await newCredential.save();
        res.status(201).json({success: true, data: newCredential}); //20 means successful creation
    } catch (error) {
        console.log("Error in create login credential:", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
});

console.log(process.env.MONGO_URI);

app.listen(3000, () => {
    connectDB();
    console.log('Server is running on port 3000');
});
