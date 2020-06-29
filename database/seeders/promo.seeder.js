const { Promo } = require("../../src/models/Promo");

class PromoSeeder {
  static async seed() {
    const newPromo = {
      name: "Verduras locas",
      description: "Todas las frutas a 15% de descuento.",
      discount: 0.15,
	    date_start : Date.now(),
      date_end :  Date.now()+1
    };

    await Promo.instance.create(newPromo);
  }
}

module.exports = { PromoSeeder };
