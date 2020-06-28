const { Category } = require("../../src/models/category");

class CategorySeeder {
  static async seed() {
    const newCate = {
      name: "category",
      description: "category",
    };

    await Category.instance.create(newCate);
  }
}

module.exports = { CategorySeeder };
