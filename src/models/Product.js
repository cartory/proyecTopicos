const { Model } = require("../../config/Model");
const collection = "products";

class Product extends Model {
  static instance = new Product();

  constructor() {
    super(collection);
  }

  async getByPromo() {

    var products = (await this.db.once("value"));
    var data = [];
    // console.log(products);
    products.forEach((product) => {
      console.log(product.val());
    });

    return products;
  }

}

module.exports = { Product };