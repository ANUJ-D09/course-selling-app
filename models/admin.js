const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const Objectid = mongoose.Objectid;

const admin = new Schema({
    email: {
        type: string,
        unique: true
    },
    username: string,
    password: string,
    userId: ObjectId


})