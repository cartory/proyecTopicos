const { Model } = require("../../config/Model");
const collection = "products";

class Product extends Model {
  static instance = new Product();

  constructor() {
    super(collection);
  }

  async getByPromo() {

    var products = await this.db.once("value");
    var array = [];
    products.forEach((product)=>{
        let d = new Date(product.child("promo").child("endDate").val());
        let t = new Date();
        if(t<=d){
            array.push(product);
        }
    });

    return array;
  }

  async getByCategory(categoryID) {
    var products = await this.db.once("value");
    var array = [];
    products.forEach((product) => {
      product.child("category").forEach((item) => {
        if (item.val() == categoryID) {
          console.log("match!!!");
          array.push(product.val());
        }
      });
    });
    console.log(array);
    return array;
  }

  async getByName(name) {
    var products = await this.db.once("value");
    var array = [];
    products.forEach((product) => {
      if (product.child("name").val().toLowerCase().includes(name)) {
        array.push(product.val());
      } else if (
        product.child("description").val().toLowerCase().includes(name)
      ) {
        array.push(product.val());
      }
    });
    return array;
  }
}

module.exports = { Product };
