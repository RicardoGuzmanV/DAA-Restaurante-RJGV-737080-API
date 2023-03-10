const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const port = 3000;

const users = [
    {
        name: 'Ricardo',
        color: 'Rojo'
    },
    {
        name: 'Pedro',
        color: 'Verde'
    },
    {
        name: 'Isai',
        color: 'Azul'
    }
]

app.get('/', (req, res) => res.send('Restaurant API working!'));
app.get('/users', (req, res) => res.json(users));

app.listen(port, () => console.log(`Server listening at port 3000`));