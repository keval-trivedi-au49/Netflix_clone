const express = require("express");
const { addToLikedMovies, getLikedMovies, removeFromLikedMovies } = require("../controllers/UserController");
const userRouter = express.Router();

userRouter.post("/add",addToLikedMovies);
userRouter.get("/liked/:email", getLikedMovies)
userRouter.put("/remove", removeFromLikedMovies);

module.exports = userRouter