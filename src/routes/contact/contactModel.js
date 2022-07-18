import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'What is the name of the contact?'],
        trim: true,
        lowercase: true,
        maxLength: [20, "Name can not exceed 20 characters"]
    },

    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, 'Email address is required'],
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

    phone: {
        type: String,
        required: [true, 'Phone number is required for every contact'],
        trim: true,
        unique: true,
        maxLength: [15, "Phone number can not exceed 13 characters"]
    },

    contacts: [{ type: mongoose.Types.ObjectId, ref: "Contact" }]
})

export default mongoose.model("Contact", ContactSchema);