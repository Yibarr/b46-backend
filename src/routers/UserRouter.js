/* eslint-disable no-console */
const express = require('express');
const { UserController } = require('../controllers/index.js');
const { UserValidator } = require('../validators/index.js');

const router = express.Router();
// CREATE
router.post('/users', UserValidator.create, UserController.create);
// READ
router.get('/users/:id', UserController.findOne);
// UPDATE
router.patch('/users/:id', UserController.updateOne);
// DELETE
router.delete('/users/:id', UserController.deleteOne);

module.exports = router;
