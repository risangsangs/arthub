const express = require('express')
const router = express.Router()

const eventController = require('../controllers/event')

const { verifyToken } = require("../middlewares/authJwt");

router.get('/event/list', [verifyToken], eventController.getListEvent);

router.get('/event/trend', [verifyToken], eventController.getListEventTrend);

router.get('/event/detail/:id', [verifyToken], eventController.getById);

router.get('/event/category/:category', [verifyToken], eventController.getCategory);

router.post('/event', [verifyToken], eventController.postEvent);

router.put('/event/:id', [verifyToken], eventController.updateEvent);

router.delete('/event/:id', [verifyToken], eventController.deleteEvent);

module.exports = router