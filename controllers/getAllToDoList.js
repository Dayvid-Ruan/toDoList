const getAllToDoListService = require('../services/getAllToDoList');

const getAllToDoList = async (_req, res, next) => {
  try {
    const getAll = await getAllToDoListService();
    return res.status(200).json(getAll);
  } catch(err) {
    next(err);
  }
}

module.exports = getAllToDoList;