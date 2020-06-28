const { database } = require("./database.config");

class Model {
  constructor(collection) {
    this.collection = collection;
    this.db = database.ref(collection);
  }

  async all() {
    return await this.db.once("value");
  }

  async find(path) {
    return await this.db.child(path).once("value");
  }

  async create(json) {
    // sample return = "https://proyectopicos-efc3c.firebaseio.com/contacts/-MArCVwkubZjdjyGpCE9"
    return await this.db.push(json);
  }

  async update(path, json) {
    // sample return = null
    return await this.db.child(path).set(json);
  }

  async destroy(path) {
    // sample return = null
    return await this.db.child(path).remove();
  }

  static toObject(json) {
    return JSON.parse(json);
  }

  static toJson(value) {
    return JSON.stringify(value);
  }
}

module.exports = { Model };
