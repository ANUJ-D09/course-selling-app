const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const course = new Schema({

    coursename: String,
    coursedescription: String,
    userId: Schema.Types.ObjectId,
    courseprice: Number,
    courseimage: String,
    Creatorid: String


})

const CourseModel = mongoose.model('course', course);
module.exports(CourseModel);