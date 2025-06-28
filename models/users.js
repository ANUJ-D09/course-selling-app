const express = require('express')
const router = express.Router();
const users = require('../models/users');
const jwt = require('jsonwebtoken')
const JWT_SECRET = "secret";
const bcrypt = require("bcrypt")

router.use('/test', function(req, res) {
    res.json("test sucesss");
})





module.exports = router;