const { Promo } = require("../../src/models/Promo");

class PromoSeeder {
  static async seed() {
    const newPromo = {
      name: "promo",
      description: "promo",
      discount: 0.2,
      dateInit: Date.now(),
      dateEnd: Date.now()
    };

    await Promo.instance.create(newPromo);
  }
}

module.exports = { PromoSeeder };
