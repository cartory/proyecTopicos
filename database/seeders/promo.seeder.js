const { Promo } = require('../../src/models/Promo');

module.exports = {
    seed: async function () {
        const newPromo = {
            name: "promo",
            description: "promo",
            discount: 0.2,
        };

        await Promo.instance.create(newPromo);
    },
};