const { Product } = require("../../src/models/Product");

class ProductSeeder {
  static async seed() {
    const newProduct = {
        code: 112233,
        name: "Pernil",
        description: "Pernil de puerco.",
        stock: 20.0,
        price: 30.0,
        category: [
          "carnes",
        ],
        promo : "O782I-D4M54-H26MM"
    };

    await Product.instance.create(newProduct);
  }
}

module.exports = { ProductSeeder };
