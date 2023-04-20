const express = require('express');
const router = express.Router();

const reservationsController = require('../controllers/reservation.controller');
const auth = require('../middleware/auth');

router.get('/', auth, reservationsController.getAllReservations);
router.post('/', reservationsController.createReservation);
router.get('/:id', auth, reservationsController.getSingleReservation);
router.put('/:id', auth, reservationsController.updateSingleReservation);
router.delete('/:id', auth, reservationsController.deleteReservation);

module.exports = router;