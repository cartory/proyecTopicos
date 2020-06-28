const categorySeeder = require("./seeders/category.seeder");
const promoSeeder = require("./seeders/promo.seeder");

process.on("exit", () => console.log("DATABASE SEEDED"));

async function seedDatabase() {
    await categorySeeder.seed();
    await promoSeeder.seed();

    process.exit(0);
}

seedDatabase();