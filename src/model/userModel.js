import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'What is the name of the user?'],
        trim: true,
        lowercase: true,
        maxLength: [20, "Name can not exceed 20 characters"]
    },

    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, 'Email address is required'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

    contacts: {
        type: Array[mongoose.Types.ObjectId],
        ref: "Contact"
    }
})

export default mongoose.model("User", UserSchema);