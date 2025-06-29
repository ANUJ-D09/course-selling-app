const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const admin = new Schema({
    email: {
        type: String,
        unique: true
    },
    username: String,
    password: String,
    userId: Schema.Types.ObjectId


})
const AdminModel = mongoose.model("admin", admin);
module.export = AdminModel;