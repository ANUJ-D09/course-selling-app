const mongoose = require('mongoose');
const Schema = mongoose.Schema();
const user = new Schema({
    email: {
        type: String,
        unique: true
    },
    username: String,
    password: String,
    userId: Schema.Types.ObjectId


})

const UserModel = mongoose.model('user', user);
module.exports(UserModel);