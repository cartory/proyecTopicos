const { CategorySeeder } = require("./seeders/category.seeder");
const { PromoSeeder } = require("./seeders/promo.seeder");
const { ProductSeeder } = require("./seeders/product.seeder");
const { OrderSeeder } = require("./seeders/order.seeder");

process.on("exit", () => console.log("DATABASE SEEDED"));

async function seedDatabase() {
<<<<<<< HEAD
  await ProductSeeder.fake(5);

=======
  // await ProductSeeder.seed();
  await OrderSeeder.seed()
>>>>>>> b33cf8a257e9c88a93deee54a2352a41d6372d63
  process.exit(0);
}

seedDatabase();
