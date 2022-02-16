const getAllToDoListService = require('../services/getAllToDoList');

const getAllToDoList = async (_req, res, next) => {
  try {
    const list = await getAllToDoListService();
    return res.status(200).json({ list });
  } catch(err) {
    next(err);
  }
}

module.exports = getAllToDoList;