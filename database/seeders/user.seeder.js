const { User } = require("../../src/models/User");

class UserSeeder {
  static async seed() {
    const user = {
      nickname: "cartory",
      nro: 74942908,
    };

    const client = {
      address: "C/Lemoine",
      firstname: "pedro",
      lastname: "caricari torrejon",
      license: 8157826,
    };

    await User.instance.create(user);
  }
}

module.exports = { UserSeeder };
