const { Router } = require('express');
const routes = Router();

const db = require('../database/database');

routes
//  CONTACTS
    .get('/contacts', (req, res) => {
        db.ref('contacts').once('value', (snapshot) => {
            data = snapshot.val();
            res.json(data);
        });
    })
    .get('/contacts/:id', (req, res) => {
        db.ref('contacts').child(req.params.id).once('value', (snapshot) => {
            data = snapshot.val();
            res.json(data);
        });
    })
    .post('/contacts',  (req, res) => {
        const newContact = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
        }
        db.ref('contacts').push(newContact);
        res.json(newContact);
    })
    .put('/contacts/:id', (req, res) => {
        const newContact = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
        }
        db.ref('contacts').child(req.params.id).set(newContact);
        res.json(newContact);
    })
    .delete('/contacts/:id', (req, res) => {
        db.ref('contacts').child(req.params.id).remove();
        res.send('CONTACT DELETED');
    })

module.exports = routes;