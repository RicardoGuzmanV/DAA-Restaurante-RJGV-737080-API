const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('GET /reservations succeeded'));
router.post('/', (req, res) => res.send('POST /reservations succeeded'));
router.get('/:id', (req, res) => res.send('GET /reservations/:id succeeded'));
router.put('/:id', (req, res) => res.send('PUT /reservations/:id succeeded'));
router.delete('/:id', (req, res) => res.send('DELETE /reservations/:id succeeded'));

module.exports = router;