const { Model } = require("../../config/Model");
const collection = "promos";

class Promo extends Model {
  static instance = new Promo();

  constructor() {
    super(collection);
  }

  async test() {
    return await this.db.on('value', async (snapshot) => {
      return await snapshot.val();
    });
  }
}

module.exports = { Promo };
