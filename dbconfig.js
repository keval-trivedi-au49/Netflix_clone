const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL, { dbName: 'netflix' },{ useNewUrlParser:true })
    // console.log("Connected to DB Successfully")
  } catch (err) {
    // console.log("Error Connecting to DB")
    
  }
}
module.exports = {
   connectDB
}