const Reservation = require('../models/reservation.model');

const getAllReservations = async (req, res, next) => {
    try{
        const allReservations = await Reservation.find();
        return res.status(200).json(allReservations);
    } catch (error) {
        return next(error);
    }
};

const createReservation = async (req, res, next) => {
    try{
        const newReservation = new Reservation({ ...req.body });
        const insertedReservation = await newReservation.save();
        return res.status(201).json(insertedReservation);
    } catch (error) {
        return next(error);
    }
};
const getSingleReservation = async (req, res, next) =>{
 try{
    const id = req.params.id;
    const reservation = await Reservation.findById(id);
     res.status(200).json(reservation);
 } catch(error){
    return next(error)
 }
}    

const updateSingleReservation = async (req, res, next) =>{
 try{
    const id = req.params.id;
    await Reservation.updateOne({ _id: id }, req.body);
    const reservation = await Reservation.findById(id);
     res.status(200).send('PUT /reservations/:id succeeded');
 } catch(error){
    return next(error)
 }
}    

const deleteReservation = async (req, res, next) =>{
 try{
    const id = req.params.id;
    await Reservation.findByIdAndDelete(id);
     res.status(204).send();
 } catch(error){
    return next(error)
 }
}    

module.exports = { getAllReservations, createReservation, getSingleReservation, updateSingleReservation, deleteReservation };