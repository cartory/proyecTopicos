const { CategorySeeder } = require("./seeders/category.seeder");
const { PromoSeeder } = require("./seeders/promo.seeder");
<<<<<<< HEAD
const { ProductSeeder } = require("./seeders/product.seeder");
=======
const { UserSeeder } = require("./seeders/user.seeder");
>>>>>>> 474c512ad8376d22c05a1b9ead166cd7fb10ed84

process.on("exit", () => console.log("DATABASE SEEDED"));

async function seedDatabase() {
<<<<<<< HEAD
  await PromoSeeder.seed();

=======
  // await CategorySeeder.seed();
  // await PromoSeeder.seed();
  await UserSeeder.seed();
  
>>>>>>> 474c512ad8376d22c05a1b9ead166cd7fb10ed84
  process.exit(0);
}

seedDatabase();
