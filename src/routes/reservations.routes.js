const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.status(200).send('GET /reservations succeeded'));
router.post('/', (req, res) => res.status(201).send('POST /reservations succeeded'));
router.get('/:id', (req, res) => res.status(200).send('GET /reservations/:id succeeded'));
router.put('/:id', (req, res) => res.status(200).send('PUT /reservations/:id succeeded'));
router.delete('/:id', (req, res) => res.status(204).send());

module.exports = router;