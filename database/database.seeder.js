const { CategorySeeder } = require("./seeders/category.seeder");
const { PromoSeeder } = require("./seeders/promo.seeder");
const { ProductSeeder } = require("./seeders/product.seeder");

process.on("exit", () => console.log("DATABASE SEEDED"));

async function seedDatabase() {
  await ProductSeeder.seed();

  process.exit(0);
}

seedDatabase();
