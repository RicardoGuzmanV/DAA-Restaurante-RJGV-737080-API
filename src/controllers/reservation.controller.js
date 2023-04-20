const Reservation = require('../models/reservation.model');

const getAllReservations = async (req, res) => {
    try{
        const allReservations = await Reservation.find();
        return res.status(200).json(allReservations);
    } catch (error) {
        return res.status(400).error(error);
    }
};

const createReservation = async (req, res) => {
    try{
        const newReservation = new Reservation({ ...req.body });
        const insertedReservation = await newReservation.save();
        return res.status(201).json(insertedReservation);
    } catch (error) {
        return res.status(400).error(error);
    }
};
const getSingleReservation = (req, res) => res.status(200).send('GET /reservations/:id succeeded');

const updateSingleReservation = (req, res) => res.status(200).send('PUT /reservations/:id succeeded');

const deleteReservation = (req, res) => res.status(204).send();

module.exports = { getAllReservations, createReservation, getSingleReservation, updateSingleReservation, deleteReservation };