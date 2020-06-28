const { CategorySeeder } = require("./seeders/category.seeder");
const { PromoSeeder } = require("./seeders/promo.seeder");

process.on("exit", () => console.log("DATABASE SEEDED"));

async function seedDatabase() {
  await CategorySeeder.seed();
  await PromoSeeder.seed();

  process.exit(0);
}

seedDatabase();
