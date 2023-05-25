const userService = require("../services/user.service");

class userController {
  async getAllUsers(req, res) {
    const users = await userService.getAllUsers();
    res.json(users);
  }
}

module.exports = new userController();