const express = require('express')
const router = express.Router();
const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken')
const JWT_SECRET = "secret";
const bcrypt = require("bcrypt")
const z = require("zod")


router.post('/signup', async function(req, res) {
    try {
        const requireBody = z.object({
            email: z.string().email(),
            password: z.string().min(5),
            username: z.string()
        })
        const parsedData = requireBody.safeParse(req.body);
        if (!parsedData.success) {
            return res.status(400).json({ message: "Invalid input format" });
        }
        const { email, password, username } = parsedData.data;
        const hashedPassword = bcrypt.hash(password, 5);
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
})

router.post('/signin', function(req, res) {
    res.json("test sucesss");
})



module.exports = router;