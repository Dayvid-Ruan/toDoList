const express = require('express');
const router = express.Router();

const createToDoListController = require('../controllers/createToDoList');
const getAllToDoListController = require('../controllers/getAllToDoList');

router.post('/', createToDoListController);
router.get('/', getAllToDoListController);

module.exports = router;