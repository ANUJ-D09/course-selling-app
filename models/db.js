const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const purchaseSchema = new Schema({
    amount: Number,
    coupon: String,
    userId: {
        type: ObjectId,
        ref: 'user'
    },
    courseId: {
        type: ObjectId,
        ref: 'course'
    }
});


const adminSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    username: String,
    password: String
});


const userSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    username: String,
    password: String
});


const courseSchema = new Schema({
    coursename: String,
    coursedescription: String,
    courseprice: Number,

    imageurl: String,
    userid: {
        type: ObjectId,
        ref: 'admin'
    }
});


const CourseModel = mongoose.model('course', courseSchema);
const UserModel = mongoose.model('user', userSchema);
const AdminModel = mongoose.model('admin', adminSchema);
const PurchaseModel = mongoose.model('purchase', purchaseSchema);


module.exports = {
    CourseModel,
    UserModel,
    AdminModel,
    PurchaseModel
};