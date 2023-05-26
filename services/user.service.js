const User = require("../data/user.model");

class userService {
  async getAllUsers() {
    return await User.find();
  };

  async createUser(user) {
    const newUser = new User(user);
    return await newUser.save();
  };
}

module.exports = new userService();