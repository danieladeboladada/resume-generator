import Resume from '../models/resumes.model.js';

//to save a new resume
export const saveResume = async (req, res) => {
    const { user_id, resume_name, resume_file } = req.body;
    console.log("Received resume data for user:", user_id);

    if (!user_id || !resume_name || !resume_file) {
        return res.status(400).json({ success: false, message: 'User ID, resume name, and resume file are required' });
    }

    const newResume = new Resume({ user_id, resume_name, resume_file });

    try {
        await newResume.save();
        res.status(201).json({ success: true, data: newResume }); //201 means successful creation
    } catch (error) {
        console.log("Error in save resume:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

//to get all resumes for a user (in case multiple resumes exist)
export const getAllResumesByUserId = async (req, res) => {
    const { user_id } = req.params
    console.log("Fetching all resumes for user:", user_id);

    if (!user_id) {
        return res.status(400).json({ success: false, message: 'User ID is required' });
    }

    try {
        const resumes = await Resume.find({ user_id: user_id });
        if (resumes.length === 0) {
            return res.status(404).json({ success: false, message: "No resumes found for this user" });
        }

        res.status(200).json({ success: true, resumes: resumes });
    } catch (error) {
        console.log("Error in get all resumes:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
