const createToDoListService = require('../services/createToDoList');

const createToDoList = async (req, res, next) => {
  try{
    const { task } = req.body;
    const _id = await createToDoListService(task);
    const create = { task, _id };
    return res.status(201).json({ create });
  } catch (err) {
    next(err)
  }
};

module.exports = createToDoList;