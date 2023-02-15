const express = require("express");
const app = express()
const cors = require("cors");
const userRouter = require("./routes/UserRoutes");
const dotenv = require('dotenv')
dotenv.config()
const path = require('path')
const { connectDB } = require("./dbconfig");
connectDB()

//middleware
app.use(cors());
app.use(express.json());
app.use("/api/user",userRouter)

//static files
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", (req, res)=> {
   res.sendFile(path.join(__dirname, "./client/build/index.html"));
 });

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
   // console.log("server is running on port 5000")
})
