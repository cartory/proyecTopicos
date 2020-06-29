const { Promo } = require("../../src/models/Promo");

class PromoSeeder {
  static async seed() {
    const newPromo = {
      name: "Carnes al costo.",
      description: "Descuento de 20% en todas las carnes.",
      discount: 0.2,
<<<<<<< HEAD
	    date_start : Date.now(),
      date_end :  Date.now()
=======
      dateInit: Date.now(),
      dateEnd: Date.now()
>>>>>>> 474c512ad8376d22c05a1b9ead166cd7fb10ed84
    };

    await Promo.instance.create(newPromo);
  }
}

module.exports = { PromoSeeder };
