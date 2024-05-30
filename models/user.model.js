const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter name"],

        },
        surname: {
            type: String,
            required: [true, "Please enter surname"],

        },
        username: {
            type: String,
            required: [true, "Please enter username"],

        },
        password: {
            type: String,
            required: [true, "Please enter password"],

        },
        mail: {
            type: String,
            required: [true, "Please enter mail"],

        },
        contact: {
            type: Number,
            required: true,
        }
    },
    { 
        timestamps: true
    }

); 

const User = mongoose.model("User", UserSchema);

module.exports = User; 