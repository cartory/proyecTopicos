const {} = require('../models/category');

module.exports = {
  all: (req, res) => {
    // db.once("value").then((snap) => {
    //   res.status(200).json(snap.val());
    // });
  },

  find: (req, res) => {
    // db.child(req.params.id)
    //   .once("value")
    //   .then((snap) => {
    //     res.status(200).json(snap.val());
    //   });
  },

  store: (req, res) => {
    const newContact = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
    };
    // db.push(newContact).then((value) => {
    //   // value = "https://proyectopicos-efc3c.firebaseio.com/contacts/-MArCVwkubZjdjyGpCE9"
    //   res.status(200).json(value);
    // });
  },

  update: (req, res) => {
    const newContact = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
    };
    // db.child(req.params.id)
    //   .set(newContact)
    //   .then((value) => {
    //     // value = null
    //     res.status(200).json(value);
    //   });
  },

  destroy: (req, res) => {
    // db.child(req.params.id)
    //   .remove()
    //   .then((value) => {
    //     // value = null
    //     res.status(200).json(value);
    //   });
  },
};
