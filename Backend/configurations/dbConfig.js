const mongoose = require('mongoose');

async function database() {

  await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.mn2y2.mongodb.net/${process.env.DB_USERNAME}?retryWrites=true&w=majority&appName=Cluster0`);
  
  if(mongoose.connection.readyState === 1) {
    console.log("Database is connected");
  }else {
    console.log("Database is disconnected");
  }
  
}



module.exports = database