import Credential from '../models/credentials.model.js';

//to add new login credentials
export const createLogin = async (req, res) => {
    const login_credentials = req.body;
    console.log("Received login credentials:", login_credentials);

    if (!login_credentials.user_name || !login_credentials.pass_word) {
        return res.status(400).json({ success: false, message: 'Username and password are required' });
    }

    const newCredential = new Credential(login_credentials);

    try {
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
        const foundLogin = await Credential.exists(login_credentials);
        if (!foundLogin){
            return res.status(404).json({success: false, message: "login not found"});
        }

        res.status(200).json({success: true, message: "Login found!"});
    } catch (error) {
        res.status(500).json({success: false, message: "Server error"});
    }
};