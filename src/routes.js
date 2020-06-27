const { Router } = require('express');
const routes = Router();

const contactController = require('./controllers/contact.controller');

routes
//  CONTACTS
    .get('/contacts', contactController.all)
    .post('/contacts',  contactController.store)
    .get('/contacts/:id', contactController.find)
    .put('/contacts/:id', contactController.update)
    .delete('/contacts/:id', contactController.destroy)
;
module.exports = routes;