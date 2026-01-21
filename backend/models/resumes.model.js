import mongoose from "mongoose";

//defining structure for the resumes collection
const resumeSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Credential',
        required: true
    },
    resume_file: {
        type: Buffer,
        required: true
    }
},  { timestamps: true //createdAt, updatedAt
    });

const Resume = mongoose.model('Resume', resumeSchema);
//we use 'Resume' because above func is smart enough to change the 'R' to lowercase and then add an 's' to the end.

export default Resume
