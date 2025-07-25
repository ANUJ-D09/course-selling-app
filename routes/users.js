const express = require('express')
const router = express.Router();
const users = require('../models/db');
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET
const { CourseModel, UserModel } = require('../models/db');

const bcrypt = require("bcrypt")
const { studentauth } = require('../auth');



router.post('/signup', async function(req, res) {
    const requireBody = z.object({
        email: z.string().email(),
        contactno: z.number.min(9).max(10),
        name: z.string().min(3),
        password: z.string()
    })
    const parsedData = requirebody.safeParse(req.body);
    if (!parsedData.success) {

        res.json({ message: "data not valid" });
    }
    const { name, contactno, email, password } = parsedData.data;
    try {
        const admin = await UserModel.create({
            name,
            contactno,
            email,
            password

        })
        res.status(201).json({ message: "Profile created", course });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "something went wrong" });
    }
})

router.post('/signin', function(req, res) {
    const { email, password } = req.body;



})
router.get('/course', studentauth, function(req, res) {
    res.json("test sucesss");
})

router.get('/course/purchases', function(req, res) {
    res.json("test sucesss");
})
router.post('/purchase', function(req, res) {
    res.json("test sucesss");
})


module.exports = router;