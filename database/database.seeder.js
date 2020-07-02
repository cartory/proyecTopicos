const { CategorySeeder } = require("./seeders/category.seeder");
const { ProductSeeder } = require("./seeders/product.seeder");
const { OrderSeeder } = require("./seeders/order.seeder");

process.on("exit", () => console.log("DATABASE SEEDED"));

async function seedDatabase() {
  await ProductSeeder.fake(1);

  process.exit(0);
}

seedDatabase();
