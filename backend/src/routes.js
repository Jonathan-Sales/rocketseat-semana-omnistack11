const express = require('express');

const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();

routes.post('/sessions', SessionController.store);

routes.post('/ong', OngController.store);

routes.get('/incident', IncidentController.index);
routes.post('/incident', IncidentController.store);
routes.delete('/incident/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;
