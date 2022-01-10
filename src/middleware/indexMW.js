const bcrypt = require("bcryptjs");
const User = require("../user/userModel");

exports.hashPassword = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 8);
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Check server logs" });
    }
};

// exports.checkPassword = async (req, res, next) => {
//     try {
//         req.body.password = await bcrypt.compare(req.body.password, 8);
//         next();
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({ message: "Check server logs" });
//     }
// }

// exports.checkPassword = async (username, password) => {
//     const match = await bcrypt.compare(password, user.passwordHash);
//     if (match) {
//         return true;
//     }   else    {
//         return false;
//     }
// }

// exports.checkPassword = async (req, res) => {
//     req.body.password = await bcrypt.compare(rawPassword, hashedPassword);
// }

exports.decryptPassword = async (req, res, next) => {
    try {
        req.user = await User.findOne({ username: req.body.username });
        if (await bcrypt.compare(req.body.password, req.user.password)) {
            next()
        }   else {
            throw new Error();
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Check server logs" })
    }
}