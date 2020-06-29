const { Product } = require("../../src/models/Product");

class ProductSeeder {
  static async seed() {
    const newProduct = {
        code: "KJADAJSJ1212DSS",
        name: "Pilfrut pequeño.",
        description: "Pilfrut 0.125 lt",
        stock: 50.0,
        price: 0.5,
        category: [
          "-MAxNXZRaXXR7KNb9WGe",
          "-MAxNxC-Jf-zpgBC620U"
        ],
        promoID : "-MAxYM8fCvAj7L3wDXVe"
    };

    await Product.instance.create(newProduct);
  }
}

module.exports = { ProductSeeder };
