const { User } = require("../models/User");

class UserController {
  static async all(req, res) {
    res.json(await User.instance.all());
  }

  static async find(req, res) {
    res.json(await User.instance.find(req.params.id));
  }

  static async store(req, res) {
    res.json(await User.instance.create(req.body));
  }

  static async update(req, res) {
    res.json(await User.instance.update(req.params.id, req.body));
  }

  static async destroy(req, res) {
    res.json(await User.instance.destroy(req.params.id));
  }
  //   USER->CLIENTS
  static async getClients(req, res) {
    res.json(await User.instance.getClients(req.params.id));
  }

  static async findClient(req, res) {
    res.json(await User.instance.getClient(req.params.id, req.params.cid));
  }

  static async setClient(req, res) {
    res.json(
      await User.instance.setClient(req.params.id, req.params.cid, req.body)
    );
  }

  static async newClient(req, res) {
    res.json(await User.instance.newClient(req.params.id, req.body));
  }

  static async dropClient(req, res) {
    res.json(await User.instance.dropClient(req.params.id, req.params.cid));
  }
}

module.exports = { UserController };
