const express = require('express');
const router = express.Router();
const { facultyauth, studentauth } = require('../auth');
const { CourseModel } = require('../models/db');

// POST: Create a course
router.post('/', facultyauth, async function(req, res) {
    const userid = req.userid;
    const { coursename, coursedescription, courseprice } = req.body;

    try {
        const course = await CourseModel.create({
            coursename,
            coursedescription,
            courseprice,
            createdBy: userid
        });

        res.status(201).json({ message: "Course created", course });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong while creating course" });
    }
});


router.get('/', async function(req, res) {
    try {
        const courses = await CourseModel.find({});
        res.json({ courses });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching courses" });
    }
});

module.exports = router;