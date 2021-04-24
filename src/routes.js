const express = require('express');

const PeriodController = require('./controllers/PeriodController');

const routes = express.Router();

routes.get('/periods', PeriodController.index);
routes.post('/period', PeriodController.store);
routes.delete('/periods/:periodId', PeriodController.delete);
routes.put('/periods/:periodId', PeriodController.update);

module.exports = routes;