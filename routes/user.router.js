const express = require("express");
const userController = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.get("/users", userController.getAllUsers);
userRouter.get("/users/:id", userController.getOneUser);
userRouter.post("/users", userController.createUser);
userRouter.delete("/users/:id", userController.deleteUser);

module.exports = userRouter;