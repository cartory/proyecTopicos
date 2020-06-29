const { Order } = require("../../src/models/Order");
const { Product } = require('../../src/models/Product');

class OrderSeeder {
    static async seed() {
        const newOrder = {
            amount: 200.1,
            date: "27/06/2020/24:12",
            shopping_cart: [
                {
                    product_quantity: 12.0,
                    product_amount: 10.0,
                    product_sale_price : 420.0,
                    productID: "",
                },
                {
                    product_quantity: 12.0,
                    product_amount: 10.0,
                    product_sale_price : 420.0,
                    productID: "",
                },
            ],
            clienteID: "O782I-D4M54-H26MM",
            usuarioID: "O782I-D4M54-H26MM"
        };

        await Order.instance.create(newOrder);
    }
}

module.exports = { OrderSeeder };
