const User = require("../data/user.model");

class userService {
  async getAllUsers() {
    return await User.find();
  };

  async getOneUser(id) {
    return await User.findById(id);
  }

  async createUser(user) {
    const newUser = new User(user);
    return await newUser.save();
  };

  async deleteUser(id) {
    return await User.findByIdAndDelete(id);
  }
}

module.exports = new userService();