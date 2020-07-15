
const { Model } = require("../../config/Model");
const collection = "products";

class Product extends Model {

  constructor() {
    super(collection);
  }

  async getByPromo() {
    var products = await this.db.once("value");
    var array = [];
    products.forEach((product) => {
      var p = product.val();
      p.id = product.key;
      let d = new Date(product.child("promo").child("endDate").val());
      let t = new Date();
      if (t <= d) {
        array.push(p);
      }
    });

    return array;
  }

  async getByCategory(categoryID) {
    var products = await this.db.once("value");
    var array = [];
    products.forEach((product) => {
      var p = product.val();
      p.id = product.key;
      product.child("category").forEach((item) => {
        if (item.val() == categoryID) {
          array.push(p);
        }
      });
    });
    return array;
  }

  async getByName(name) {
    var products = await this.db.once("value");
    var array = [];
    products.forEach((product) => {
      var p = product.val();
      p.id = product.key;
      if (product.child("name").val().toLowerCase().includes(name.toLowerCase())) {
        array.push(p);
      } else if (
        product.child("description").val().toLowerCase().includes(name.toLowerCase())
      ) {
        array.push(p);
      }
    });
    return array;
  }

}
const product = new Product();
module.exports = { product };
