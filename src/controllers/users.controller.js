const bcrypty = require('bcrypt');

const User = require('../models/user.model');

const getAllUsers = async (req, res, next) => {
    try{
        const allUsers = await User.find().select("-password -token");
        return res.status(200).json(allUsers);
    } catch (error) {
        return next(error);
    }
};

const createUser = async (req, res, next) => {
    try{
        const { username, name, password } = req.body;
        const encyptedPassword = await bcrypty.hash(password, 10);

        const newUser = new User({ 
            username: username.toLowerCase(),
            name,
            password: encyptedPassword
         });
        
        const insertedUser = await newUser.save();
        const returnUser = insertedUser.toObject();
        delete returnUser.password;
        return res.status(201).json(insertedUser);
    } catch (error) {
        return next(error);
    }
};

const deleteUser = async (req, res, next) =>{
 try{
    const id = req.params.id;
    await User.findByIdAndDelete(id);
     res.status(204).send();
 } catch(error){
    return next(error)
 }
}    

module.exports = { getAllUsers, createUser, deleteUser };