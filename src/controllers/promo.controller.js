const { Promo } = require("../models/Promo");

module.exports = {
  all: async (req, res) => {
    res.status(200).json(await Promo.instance.all());
  },

  find: async (req, res) => {
    res.status(200).json(await Promo.instance.find(req.params.id));
  },

  store: async (req, res) => {
    const newContact = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
    };
    res.status(200).json(await Promo.instance.create(newContact));
  },

  update: async (req, res) => {
    const newContact = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
    };
    res.status(200).json(await Promo.instance.update(newContact));
  },

  destroy: async (req, res) => {
    res.status(200).json(await Promo.instance.destroy(res.params.id));
  },
};
