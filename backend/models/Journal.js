const mongoose= require('mongoose');
const journalSchema= new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    country:{
        type: String,
        required:true,
    },
     city:{
        type: String,
        required:true,
    },
    hotels: {
        type: String
    },
    budget:{
        type: String,
        required: true
    },
    description:{
        type: String,
    },
    rating:{
        type: Number,
        required:true
    },
    Images: [{
        type: String
    }] },{
        timestamps: true
});
module.exports= mongoose.model('Journal', journalSchema);