const { Order } = require("../../src/models/Order");

class OrderSeeder {
  static async seed() {
    const newOrder = {
      amount: 200.1,
      date: Date.now(),
      shopping_cart: [
        {
          product_quantity: 12.0,
          product_amount: 10.0,
          product_sale_price: 420.0,
          productID: "-MAxZJhv1hOIAJqwX40n",
        },
        {
          product_quantity: 12.0,
          product_amount: 10.0,
          product_sale_price: 420.0,
          productID: "-MAxZfGFCbJz6Or_HZDh",
        },
      ],
      clientID: "-MAxiShZ6jLb0Xoa_VTA",
      userID: "-MAxfxPVq0_4vVzusSiO",
    };

    await Order.instance.create(newOrder);
  }
}

module.exports = { OrderSeeder };
