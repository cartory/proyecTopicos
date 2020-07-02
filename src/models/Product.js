const { Model } = require("../../config/Model");
const collection = "products";

class Product extends Model {
  static instance = new Product();

  constructor() {
    super(collection);
  }

  async getByPromo() {

    var products = await this.db.once("value");
    var arary = [];

    products.forEach((product)=>{
        
    })

    return array;
  }

  async getByCategory(categoryID) {
    var products = await this.db.once("value");
    var array = [];
    // console.log(products);
    products.forEach((product) => {
      product.child("category").forEach((item) => {;
        if (item.val() == categoryID) {
          console.log("match!!!");
          array.push(product.val());
        }
      });
    });
    console.log(array);
    return array;
  }
}

module.exports = { Product };
