const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {
    isEmail
} = require('validator')

// user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 20,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        validate: [isEmail],
        lowercase: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        max: 100,
        minlength: 6
    },
    picture: {
        type: String,
        default: "./uploads/profil/Unknown_Member.jpg"
    },
    bio: {
        type: String,
        max: 500,
    },
    followers: {
        type: [String]
    },
    following: {
        type: [String]
    },
    likes: {
        type: [String]
    }
}, {
    timestamps: true,
});
const UserModel = mongoose.model('user', userSchema);
module.exports = UserModel;