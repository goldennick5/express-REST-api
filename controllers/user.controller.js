const userService = require("../services/user.service");

class userController {
  async getAllUsers(req, res) {
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error(error.message);
    }
  };

  async createUser(req, res) {
    try {
      if(!req.body) return res.sendStatus(400);
      const { username, email, password } = req.body;
      const newUser = {
        username: username,
        email: email,
        password: password
      };
      const user = await userService.createUser(newUser);
      res.status(201).json(user);
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = new userController();