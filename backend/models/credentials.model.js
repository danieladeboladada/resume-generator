import mongoose from "mongoose";

//defining structure for the credentials collection
const credSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true
    },
    encr_password: {
        type: String,
        required: true
    }
},  { timestamps: true //createdAt, updatedAt
    });

const Credential = mongoose.model('Credential', credSchema);
//we use 'Credential' because above func is smart enough to change the 'C' to lowercase and then add an 's' to the end.

export default Credential