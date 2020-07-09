const { Order } = require("../../src/models/Order");
const faker = require("faker");

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

  static async fake(nro) {

    while (nro--) {
      var p = [];
      const n = faker.random.number({ 'min': 1, 'max': 10 });

      for (var i = 0; i < n; i++) {
        p.push({
          product_quantity: faker.random.number({ 'min': 1, 'max': 100 }),
          product_amount: faker.random.number({ 'min': 1, 'max': 100 }),
          product_sale_price: faker.random.number({ 'min': 1, 'max': 100 }),
          productID: '-' + faker.random.alphaNumeric(16),
        });
      }

      const newOrder = {
        amount: faker.random.number({ 'min': 1, 'max': 100 }),
        date: Date.now(),
        shopping_cart: p,
        clientID: faker.random.alphaNumeric(16),
        userID: faker.random.alphaNumeric(16),
      };

      await Order.instance.create(newOrder);
    }

  }
}

module.exports = { OrderSeeder };
