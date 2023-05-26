const express = require("express");
const userController = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.get("/users", userController.getAllUsers);
userRouter.post("/users", userController.createUser);

module.exports = userRouter;