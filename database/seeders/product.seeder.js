const { Product } = require("../../src/models/Product");
const faker = require("faker");

const categories = [
  "-MAxNQyICr9nP2SQvM3v",
  "-MAxNXZRaXXR7KNb9WGe",
  "-MAxNjmGpdCx8no0XtKv",
  "-MAxNxC-Jf-zpgBC620U",
  "-MAxOWli2SHbL0MscC7z",
  "-MAy4W0oZgjOPtPSlJNS",
  "-MAy4e37HJTZV68E8tqE",
  "-MAy4kiIXDGHP08BWX3J",
  "-MAy4srCXcBs7ru2Bhbh",
  "-MAy5_Hr5gEH6bmiCPvW",
];

class ProductSeeder {
  static async seed() {
    const newProduct = {
      code: "??",
      name: "???",
      description: "???",
      url_photo: "???",
      stock: 1,
      price: 1,
      category: ["???"],
      promo: null,
    };

    await Product.instance.create(newProduct);
  }

  static addDays(dateObj, numDays) {
    dateObj.setDate(dateObj.getDate() + numDays);
    return dateObj;
  }

  static async fake(nro) {
    while (nro-- > 0) {
      var newProduct = {
        code: faker.random.alphaNumeric(10),
        name: faker.commerce.productName(),
        image_url: "https://i.imgur.com/O8wDXAc.png",
        description: faker.lorem.sentence(),
        stock: faker.random.number(100),
        price: faker.commerce.price(10.0),
        category: [
          faker.random.arrayElement(categories),
          faker.random.arrayElement(categories),
        ],
        promo: {
          discount: faker.random.number({ min: 0, max: 100 }) / 100,
          endDate: this.addDays(
            new Date(),
            faker.random.number({ min: 0, max: 7 })
          ).getTime(),
        },
      };

      await Product.instance.create(newProduct);
    }
  }
}

module.exports = { ProductSeeder };
