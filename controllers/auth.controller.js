const UserModel = require('../models/user.model')
const bcrypt = require('bcrypt')
module.exports.signUp = async (req, res) => {
    console.log(req.body)
    const {
        username,
        email,
        password
    } = req.body

    try {
        // hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const user = await UserModel.create({
            username,
            email,
            password: hashedPassword
        });
        res.status(201).json({
            user: user._id,
            password: user.password
        })
    } catch (err) {
        res.status(200).send({
            err
        })
    }
}