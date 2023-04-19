const getAllReservations = (req, res) => res.status(200).send('GET /reservations succeeded');

const createReservation = (req, res) => res.status(201).send('POST /reservations succeeded');

const getSingleReservation = (req, res) => res.status(200).send('GET /reservations/:id succeeded');

const updateSingleReservation = (req, res) => res.status(200).send('PUT /reservations/:id succeeded');

const deleteReservation = (req, res) => res.status(204).send();

module.exports = { getAllReservations, createReservation, getSingleReservation, updateSingleReservation, deleteReservation };