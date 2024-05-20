const mongoose = require("mongoose");

const connectDB = async () => {
  
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST:${connectionInstance.connection.host}`
    );
  
};

module.exports =  connectDB;




