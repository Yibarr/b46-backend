/* eslint-disable no-console */
const express = require('express');
const { UserController } = require('../controllers/index.js');

const router = express.Router();

router.post('/users', UserController.create);
// READ
// UPDATE
// DELETE

module.exports = router;
