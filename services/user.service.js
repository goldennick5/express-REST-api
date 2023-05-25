const User = require("../data/user.model");

class userService {
  async getAllUsers() {
    return await User.findOne();
  }
}

module.exports = new userService();