const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('GET /users succeeded'));
router.post('/', (req, res) => res.send('POST /users succeeded'));
router.get('/:id', (req, res) => res.send('GET /users/:id succeeded'));
router.put('/:id', (req, res) => res.send('PUT /users/:id succeeded'));
router.delete('/:id', (req, res) => res.send('DELETE /users/:id succeeded'));

module.exports = router;