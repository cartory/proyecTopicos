const { User } = require("../../src/models/User");

class UserSeeder {
  static async seed() {
    const data = {
      nickname: "cartory",
      nro: 74942908,
    };

    await User.instance.create(data);
  }
}

module.exports = { UserSeeder };
