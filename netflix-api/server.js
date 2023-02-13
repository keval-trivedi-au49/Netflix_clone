const express = require("express");
const app = express()
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/UserRoutes");

//middleware
app.use(cors());
app.use(express.json());
app.use("/api/user",userRouter)

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/netflix", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("DB Connected successfully");
  }).catch((err)=>{
   console.log(err.message)
  })

app.listen(5000,()=>{
   console.log("server is running on port 5000")
})
