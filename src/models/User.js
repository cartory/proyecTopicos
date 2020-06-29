const { Model } = require("../../config/Model");
const collection = "users";
const clients = "clients";

class User extends Model {
  static instance = new User();

  constructor() {
    super(collection);
	}
	
	async newClient(userID, client) {
		return await this.db.child(userID).push(client);
	}

  async getClients(userID) {
    return await this.db.child(userID).child(clients).once();
  }

  async getClient(userID, clientID) {
    return await this.db.child(userID).child(clients).child(clientID).once();
  }

  async setClient(userID, clientID, client) {
		return await this.db.child(userID).child(clients).child(clientID).set(client);
	}

	async dropClient(userID, clientID) {
		return await this.db.child(userID).child(clients).child(clientID).remove();
	}
}

module.exports = { User };
