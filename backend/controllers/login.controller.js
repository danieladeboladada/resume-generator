import bcrypt from 'bcrypt';
import Credential from '../models/credentials.model.js';

//to add new login credentials
export const createLogin = async (req, res) => {
    const login_credentials = req.body;
    console.log("Received login credentials:", login_credentials);

    if (!login_credentials.user_name || !login_credentials.pass_word) {
        return res.status(400).json({ success: false, message: 'Username and password are required' });
    }

    try {
        const hashedPassword = await bcrypt.hash(login_credentials.pass_word, 10);
        const newCredential = new Credential({ user_name: login_credentials.user_name, pass_word: hashedPassword });
        await newCredential.save();
        res.status(201).json({success: true, data: newCredential}); //201 means successful creation
    } catch (error) {
        console.log("Error in create login credential:", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
};

//to verify login credentials
export const verifyLogin = async (req, res) => {
    const login_credentials = req.body;
    console.log("Entered login credentials:", login_credentials);

    if (!login_credentials.user_name || !login_credentials.pass_word) {
        return res.status(400).json({ success: false, message: 'Username and password are required' });
    }

    try {
        const foundLogin = await Credential.findOne({ user_name: login_credentials.user_name });
        if (!foundLogin){
            return res.status(404).json({success: false, message: "Invalid username or password"});
        }

        const passwordMatch = await bcrypt.compare(login_credentials.pass_word, foundLogin.pass_word);
        if (!passwordMatch) {
            return res.status(401).json({success: false, message: "Invalid username or password"});
        }

        res.status(200).json({success: true, user_id: foundLogin._id, message: "Login found!"});
    } catch (error) {
        res.status(500).json({success: false, message: "Server error"});
    }
};