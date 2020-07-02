const { Model } = require("../../config/Model");
const collection = "products";

class Product extends Model {
  static instance = new Product();

  constructor() {
    super(collection);
  }

  async getByPromo() {
    var p = [];
    this.db.once("value").then(
        function(snapshot){
            snapshot.forEach((product)=>{
                p.push(product.child("promo").val());
            })
        }
    );

    return p;
  }

}

module.exports = { Product };