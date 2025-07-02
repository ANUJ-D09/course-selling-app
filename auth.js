const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET

function facultyauth(req, res, next) {
    const token = req.body.token;

    if (!token) {
        return res.status(401).json({ message: "Token missing" });
    }

    try {
        const decryptedToken = jwt.verify(token, JWT_SECRET);
        req.userid = decryptedToken.userid;
        next();
    } catch (error) {
        console.error(error);
        res.status(403).json({ message: "Invalid or expired token" });
    }
}


function studentauth(req, res, next) {
    const token = req.body.token;
    if (!token) {
        return res.status(400).json({ message: "token missing" });
    }
    try {
        const decryptedToken = jwt.verify(token, JWT_SECRET);
        req.userid = decryptedToken.userid;
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "expired token" })

    }
}


module.exports = facultyauth;