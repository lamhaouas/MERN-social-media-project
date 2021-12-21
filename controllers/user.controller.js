const UserModel = require('../models/user.model')
const fs = require('fs')

//get all users
module.exports.getAllUsers = async (req, res) => {
    try {
        const allUsers = await UserModel.find().select('-password -email');
        res.status(200).json(allUsers);
    } catch (err) {
        res.status(404).json({
            err
        })
    }
}
//get user infos
module.exports.userInfos = async (req, res) => {
    try {
        const getUserInfos = await UserModel.findOne({
            _id: req.params.id
        }).select('-password')
        res.status(200).json(getUserInfos)
    } catch {
        res.status(404).json({
            message: err
        })
    }
}
// Update user infos

// Delete user profile
module.exports.deleteUser = async (req, res) => {
    try {
        await UserModel.remove({
            _id: req.params.id
        }).exec()
        res.status(200).json({
            message: "profile deleted"
        })
    } catch {
        res.status(404).json({
            message: 'user not found'
        })
    }

}