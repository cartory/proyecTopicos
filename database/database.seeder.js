const { CategorySeeder } = require("./seeders/category.seeder");
const { ProductSeeder } = require("./seeders/product.seeder");
const { OrderSeeder } = require("./seeders/order.seeder");
const { PaymentMethodSeeder } = require("./seeders/payment_method");

process.on("exit", () => console.log("DATABASE SEEDED"));

async function seedDatabase() {
  await OrderSeeder.fake(3)
  process.exit(0);
}

seedDatabase();
