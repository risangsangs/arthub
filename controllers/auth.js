const config = require("../config/auth");
const User = require("../models/User");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const getById = async (req, res) => {
    const userId = req.params.userId;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({
                message: "User tidak ditemukan",
            });
        }

        res.status(200).json({
            message: "success",
            data: {
                _id: user._id,
                username: user.username,
                email: user.email,
            }
        });
    } catch (error) {
        res.status(500).json({
            message: "Terjadi kesalahan server.",
        });
    }
};

const signup = async (req, res) => {
    // Validasi panjang password
    if (req.body.password.length !== 8) {
        return res.status(400).json({
            message: "Password harus memiliki panjang 8 karakter.",
        });
    }

    try {
        const table = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
        });

        console.log(table);
        res.status(201).json({
            message: "success",
            userId: table._id
        });
    } catch (error) {
        res.status(500).json({
            message: "Terjadi kesalahan server.",
        });
    }
};

const signin = async (req, res) => {
    const table = await User.findOne({
        email: req.body.email,
    });
    console.log(table);

    if (!table) {
        return res.status(404).json({
            message: "the email column is empty"
        });
    }

    console.log(table);

    var passwordIsValid = bcrypt.compareSync(req.body.password, table.password);

    if (!passwordIsValid) {
        return res.status(401).json({
            accessToken: null,
            message: "Invalid Password!",
        });
    }

    const token = jwt.sign({ id: table._id }, config.secret, {
        algorithm: "HS256",
        allowInsecureKeySizes: true,
        expiresIn: 86400, // 24 hours
    });

    res.status(200).json({
        id: table._id,
        username: table.username,
        accessToken: token,
    });
};

const editUser = async (req, res) => {
    try {
        const updatedUser = await User.findOneAndUpdate(
            { _id: req.params.userId }, // Filter berdasarkan ID pengguna
            {
                username: req.body.username,
                password: bcrypt.hashSync(req.body.password, 8) // Enkripsi password baru
            },
            { new: true } // Mengembalikan dokumen setelah diperbarui
        );

        if (!updatedUser) {
            return res.status(404).json({
                message: "Pengguna tidak ditemukan"
            });
        }

        res.status(200).json({
            message: "Data pengguna berhasil diperbarui",
            user: updatedUser
        });
    } catch (error) {
        res.status(500).json({
            message: "Terjadi kesalahan server",
            error: error.message
        });
    }
};

const editPassword = async (req, res) => {
    if (req.body.password.length < 8) {
        return res.status(400).json({
            message: "Password minimal 8 karakter.",
        });
    }

    try {
        const updatedUser = await User.findOneAndUpdate(
            { _id: req.params.userId }, // Filter berdasarkan ID pengguna
            {
                password: bcrypt.hashSync(req.body.password, 8) // Enkripsi password baru
            },
            { new: true } // Mengembalikan dokumen setelah diperbarui
        );

        if (!updatedUser) {
            return res.status(404).json({
                message: "Pengguna tidak ditemukan"
            });
        }

        res.status(200).json({
            message: "Password pengguna berhasil diperbarui",
            user: updatedUser
        });
    } catch (error) {
        res.status(500).json({
            message: "Terjadi kesalahan server",
            error: error.message
        });
    }
};

const logout = async (req, res) => {
    try {
        res.status(200).json({
            message: "Logout berhasil",
            accessToken: null // Menghapus token dari sisi klien
        });
    } catch (error) {
        res.status(500).json({
            message: "Terjadi kesalahan server",
            error: error.message
        });
    }
};

module.exports = { getById, signup, signin, editUser, editPassword, logout };
