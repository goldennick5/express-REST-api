const userService = require("../services/user.service");

class userController {
  async getAllUsers(req, res) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(404).send(error);
    }
  };

  async getOneUser(req, res) {
    try {
      const id = req.params.id;
      const user = await userService.getOneUser(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).send(error);
    }
  };

  async createUser(req, res) {
    try {
      if (!req.body) return res.sendStatus(400);
      const { username, email, password } = req.body;
      const newUser = {
        username: username,
        email: email,
        password: password
      };
      const user = await userService.createUser(newUser);
      res.status(201).json(user);
    } catch (error) {
      res.status(404).send(error);
    }
  };

  async deleteUser(req, res) {
    try {
      const id = req.params.id;
      const user = await userService.deleteUser(id);
      res.status(204).json(user);
    } catch (error) {
      res.status(404).send(error);
    }
  }
}

module.exports = new userController();