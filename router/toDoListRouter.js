const express = require('express');
const router = express.Router();

const createToDoListController = require('../controllers/createToDoList');

router.post('/', createToDoListController);

module.exports = router;