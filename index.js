const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const UsersUtil = require('./src/utils/users.utils');

const homeRoutes = require('./src/routes/home.routes');
const reservationsRoutes = require('./src/routes/reservations.routes');
const usersRoutes = require('./src/routes/users.routes');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', homeRoutes);
app.use('/reservations', reservationsRoutes);
app.use('/users', usersRoutes);

const main = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        await UsersUtil.createUser();
        app.listen(process.env.PORT, () => console.log('Server listening at port ' + process.env.PORT));
    } catch(error) {
        console.error(error);
        process.exit(1);
    }
};

main();

