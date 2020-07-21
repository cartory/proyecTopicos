const { product } = require("../../src/models/Product");
const faker = require("faker");

const categories = [
  "-MAxNQyICr9nP2SQvM3v", // 0  Carnes
  "-MAxNXZRaXXR7KNb9WGe", // 1 lácteos
  "-MAxNjmGpdCx8no0XtKv", // 2 Limpieza
  "-MAxNxC-Jf-zpgBC620U", // 3 Verduras
  "-MAxOWli2SHbL0MscC7z", // 4 Pasteleria
  "-MAy4W0oZgjOPtPSlJNS", // 5 Frutas
  "-MAy4e37HJTZV68E8tqE", // 6 Panaderia
  "-MAy4kiIXDGHP08BWX3J", // 7 Nacional
  "-MAy4srCXcBs7ru2Bhbh", // 8 Importados
  "-MAy5_Hr5gEH6bmiCPvW", // 9 Bebidas
];

class ProductSeeder {
  static async seed() {
    var list = [
      {
        code: faker.random.alphaNumeric(10),
        name: "Pan Francés",
        image_url: "https://www.ketal.com.bo/image/cache/catalog/product/80178821-550x550.jpg",
        description: `Pan Ketal Francés Unidad`,
        stock: faker.random.number(30) + 1,
        price: faker.random.number(1) + 0.5,
        category: [categories[6]],
        promo: {
          discount: faker.random.number({ min: 0, max: 100 }) / 100,
          endDate: this.addDays(
            new Date(),
            faker.random.number({ min: 0, max: 7 })
          ).getTime(),
        },
      },
      {
        code: faker.random.alphaNumeric(10),
        name: "ALFAJOR",
        image_url: "https://www.ketal.com.bo/image/cache/catalog/product/56060001-550x550.jpg",
        description: `ALFAJOR KETAL 6UN MAICENA`,
        stock: faker.random.number(10) + 1,
        price: faker.random.number(6) + 0.99,
        category: [categories[6], categories[4]],
        promo: {
          discount: faker.random.number({ min: 0, max: 100 }) / 100,
          endDate: this.addDays(
            new Date(),
            faker.random.number({ min: 0, max: 7 })
          ).getTime(),
        },
      },

      {
        code: faker.random.alphaNumeric(10),
        name: "Pan Sarna",
        image_url: "https://www.ketal.com.bo/image/cache/catalog/product/80178824-550x550.jpg",
        description: `Pan Ketal Sarna Unidad`,
        stock: faker.random.number(23) + 1,
        price: faker.random.number(1) + 0.7,
        category: [categories[6],],
        promo: {
          discount: faker.random.number({ min: 0, max: 100 }) / 100,
          endDate: this.addDays(
            new Date(),
            faker.random.number({ min: 0, max: 7 })
          ).getTime(),
        },
      },

      {
        code: faker.random.alphaNumeric(10),
        name: "Pan Molde",
        image_url: "https://www.ketal.com.bo/image/cache/catalog/product/28030346-550x550.jpg",
        description: `PAN CRIS MOLDE BLANCO`,
        stock: faker.random.number(13) + 1,
        price: faker.random.number(8) + 0.99,
        category: [categories[6]],
        promo: {
          discount: faker.random.number({ min: 0, max: 100 }) / 100,
          endDate: this.addDays(
            new Date(),
            faker.random.number({ min: 0, max: 7 })
          ).getTime(),
        },
      },
      {
        code: faker.random.alphaNumeric(10),
        name: "Pan Negro  ",
        image_url: "https://www.ketal.com.bo/image/cache/catalog/product/80190264-550x550.jpg",
        description: `Pan Ketal Negro Por Unidad`,
        stock: faker.random.number(65) + 1,
        price: faker.random.number(1) + 0.33,
        category: [categories[6]],
        promo: {
          discount: faker.random.number({ min: 0, max: 100 }) / 100,
          endDate: this.addDays(
            new Date(),
            faker.random.number({ min: 0, max: 7 })
          ).getTime(),
        },
      },
    ];

    list.forEach(async function (item) {
      await product.create(item);
    });
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
