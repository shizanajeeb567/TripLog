const mongoose= require('mongoose');
require('dotenv').config();
const connectDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('mongoDB connected');
    }catch(error){
        console.error('Connection unsuccessful.', error.message);
        process.exit(1);
    }
};
module.exports= connectDB;