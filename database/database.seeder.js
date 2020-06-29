const { CategorySeeder } = require("./seeders/category.seeder");
const { PromoSeeder } = require("./seeders/promo.seeder");
const { UserSeeder } = require("./seeders/user.seeder");

process.on("exit", () => console.log("DATABASE SEEDED"));

async function seedDatabase() {
  // await CategorySeeder.seed();
  // await PromoSeeder.seed();
  await UserSeeder.seed();
  
  process.exit(0);
}

seedDatabase();
