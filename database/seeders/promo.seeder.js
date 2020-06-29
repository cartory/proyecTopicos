const { Promo } = require("../../src/models/Promo");

class PromoSeeder {
  static async seed() {
    const newPromo = {
      name: "Carnes al costo.",
      description: "Descuento de 20% en todas las carnes.",
      discount: 0.2,
	    date_start : Date.now(),
      date_end :  Date.now()
    };

    await Promo.instance.create(newPromo);
  }
}

module.exports = { PromoSeeder };
