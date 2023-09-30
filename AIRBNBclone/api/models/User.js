//For the user in MongoDB
const mongoose = require('mongoose');
const {Schema} = mongoose   //new mongoose.Schema() skip this part

const UserSchema = new Schema({
    name: String,
    email: {type:String, unique:true},
    password: String,
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;