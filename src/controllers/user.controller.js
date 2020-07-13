
const { user } = require("../models/User");

class UserController {
  static async all(req, res) {
    res.json(await user.all());
  }

  static async find(req, res) {
    res.json(await user.find(req.params.id));
  }

  static async store(req, res) {
    res.json(await user.create(req.body));
  }

  static async update(req, res) {
    res.json(await user.update(req.params.id, req.body));
  }

  static async destroy(req, res) {
    res.json(await user.destroy(req.params.id));
  }
  //   user->CLIENTS
  static async getClients(req, res) {
    res.json(await user.getClients(req.params.id));
  }

  static async findClient(req, res) {
    res.json(await user.getClient(req.params.id, req.params.cid));
  }

  static async setClient(req, res) {
    res.json(
      await user.setClient(req.params.id, req.params.cid, req.body)
    );
  }

  static async newClient(req, res) {
    res.json(await user.newClient(req.params.id, req.body));
  }

  static async dropClient(req, res) {
    res.json(await user.dropClient(req.params.id, req.params.cid));
  }

 

}

module.exports = { UserController };
