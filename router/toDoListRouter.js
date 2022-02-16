const express = require('express');
const router = express.Router();

const createToDoListController = require('../controllers/createToDoList');
const getAllToDoListController = require('../controllers/getAllToDoList');
const deleteToDoListController = require('../controllers/deleteToDoList');

router.post('/create', createToDoListController);
router.get('/list', getAllToDoListController);
router.delete('/:id', deleteToDoListController);

module.exports = router;