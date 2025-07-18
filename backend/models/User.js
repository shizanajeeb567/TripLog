const mongoose= require('mongoose');
const userSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        required: true,
        type: String
    }},{
        timestamps: true
});

module.exports = mongoose.model('User', userSchema);