const createToDoListService = require('../services/createToDoList');

const createToDoList = async (req, res, next) => {
  try{
    const { task } = req.body;
    const _id = await createToDoListService(task);
    const tasks = { task, _id };
    return res.status(201).json({tasks});
  } catch (err) {
    next(err)
  }
};

module.exports = createToDoList;