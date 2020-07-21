/*
const { User } = require("../../src/models/User");
const faker = require("faker");
class UserSeeder {
  static async seed() {
    const user = {
      nickname: "cartory",
      phone: 74942908,
    };

    const client = {
      address: "C/Lemoine",
      firstname: "pedro",
      lastname: "caricari torrejon",
      license: 8157826,
    };

    await User.instance.create(user);
  }

  static async fake(nro) {
    while (nro-- > 0) {
      var user = {
        username: faker.internet.userName(),
        phone: faker.random.number({
          min: 60000000,
          max: 7999999,
        }),
      };

      var client = {
        cliendID: {
          lastname: faker.name.lastName(),
          firstname: faker.name.firstName(),
          license: faker.random.number({
            min: 1000000,
            max: 9999999,
          }),
          address: faker.address.streetAddress(),
        },
      };

      user.clients = client;
      console.log(user);
      await User.instance.create(user);
    }
  }
}

module.exports = { UserSeeder };
*/