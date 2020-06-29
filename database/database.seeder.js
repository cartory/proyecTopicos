const { CategorySeeder } = require("./seeders/category.seeder");
const { PromoSeeder } = require("./seeders/promo.seeder");
const { ProductSeeder } = require("./seeders/product.seeder");
const { OrderSeeder } = require("./seeders/order.seeder");

process.on("exit", () => console.log("DATABASE SEEDED"));

async function seedDatabase() {
  // await ProductSeeder.seed();
  await OrderSeeder.seed()
  process.exit(0);
}

seedDatabase();
