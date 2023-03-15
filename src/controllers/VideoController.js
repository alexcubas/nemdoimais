const { response } = require("express");
const { v4: uuid } = require("uuid");
const User = require("../models/User");

module.exports = {
    async index(req, res) {
        try {
            const user = await User.find();
            return res.status(200).json({ user });
        } catch (errr) {
            res.status(500).json({ error: err.message });
        }
    },

    async store(req, res) {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res
                .status(400)
                .json({ error: "Missing name, email or password" });
        }
        const user = new User({
            _id: uuid(),
            name,
            email,
            password,
        });
        try {
            await user.save();
            return res.status(201).json({ message: "user created" });
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    },
};
