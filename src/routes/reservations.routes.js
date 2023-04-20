const express = require('express');
const router = express.Router();

const reservationsController = require('../controllers/reservation.controller');

router.get('/', reservationsController.getAllReservations);
router.post('/', reservationsController.createReservation);
router.get('/:id', reservationsController.getSingleReservation);
router.put('/:id', reservationsController.updateSingleReservation);
router.delete('/:id', reservationsController.deleteReservation);

module.exports = router;