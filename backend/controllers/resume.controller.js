import Resume from '../models/resumes.model.js';
import { RESUME_ACTIVE, RESUME_DELETED } from '../constants.js';

//to save a new resume
export const saveResume = async (req, res) => {
    const { user_id, resume_name, resume_body } = req.body;
    console.log("Received resume data for user:", user_id);

    if (!user_id || !resume_name || !resume_body) {
        return res.status(400).json({ success: false, message: 'User ID, resume name, and resume body are required' });
    }

    const newResume = new Resume({ user_id, resume_name, resume_body });

    try {
        await newResume.save();
        res.status(201).json({ success: true, data: newResume }); //201 means successful creation
    } catch (error) {
        console.log("Error in save resume:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

//to get all active resumes for a user
export const getAllActiveResumesByUserId = async (req, res) => {
    const { user_id } = req.params;
    console.log("Fetching all ACTIVE resumes for user:", user_id);

    if (!user_id) {
        return res.status(400).json({ success: false, message: 'User ID is required' });
    }

    try {
        const resumes = await Resume.find({ user_id: user_id, status: RESUME_ACTIVE });
        if (resumes.length === 0) {
            return res.status(404).json({ success: false, message: "No active resumes found for this user" });
        }

        res.status(200).json({ success: true, resumes: resumes });
    } catch (error) {
        console.log("Error in get all active resumes:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

//to get all deleted resumes for a user
export const getAllDeletedResumesByUserId = async (req, res) => {
    const { user_id } = req.params;
    console.log("Fetching all DELETED resumes for user:", user_id);

    if (!user_id) {
        return res.status(400).json({ success: false, message: 'User ID is required' });
    }

    try {
        const resumes = await Resume.find({ user_id: user_id, status: RESUME_DELETED });
        if (resumes.length === 0) {
            return res.status(404).json({ success: false, message: "No deleted resumes found for this user" });
        }

        res.status(200).json({ success: true, resumes: resumes });
    } catch (error) {
        console.log("Error in get all deleted resumes:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const deleteResumeById = async (req, res) => {
    const { resume_id } = req.params;
    if (!resume_id) {
        return res.status(400).json({ success: false, message: 'Resume ID is required' });
    }
    try {
        const deleted = await Resume.findByIdAndDelete(resume_id);
        if (!deleted) {
            return res.status(404).json({ success: false, message: 'Resume not found' });
        }
        res.status(200).json({ success: true, message: 'Resume deleted successfully' });
    } catch (error) {
        console.log('Error in delete resume:', error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// Temporarily delete a resume by setting status to 'deleted'
export const tempDeleteResumeById = async (req, res) => {
    const { resume_id } = req.params;
    if (!resume_id) {
        return res.status(400).json({ success: false, message: 'Resume ID is required' });
    }
    try {
        const updated = await Resume.findByIdAndUpdate(
            resume_id,
            { status: RESUME_DELETED, deleted_at: new Date() },
            { new: true }
        );
        if (!updated) {
            return res.status(404).json({ success: false, message: 'Resume not found' });
        }
        res.status(200).json({ success: true, message: 'Resume marked as deleted', data: updated });
    } catch (error) {
        console.log('Error in temp delete resume:', error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

// Restore a deleted resume by setting status to 'active'
export const restoreResumeById = async (req, res) => {
    const { resume_id } = req.params;
    if (!resume_id) {
        return res.status(400).json({ success: false, message: 'Resume ID is required' });
    }
    try {
        const updated = await Resume.findByIdAndUpdate(
            resume_id,
            { status: RESUME_ACTIVE, deleted_at: null },
            { new: true }
        );
        if (!updated) {
            return res.status(404).json({ success: false, message: 'Resume not found' });
        }
        res.status(200).json({ success: true, message: 'Resume restored', data: updated });
    } catch (error) {
        console.log('Error in restore resume:', error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};