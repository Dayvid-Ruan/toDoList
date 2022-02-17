const createToDoListService = require('../services/createToDoList');

const createToDoList = async (req, res, next) => {
  try{
    const { task, status } = req.body;
    const _id = await createToDoListService(task, status);
    const create = { task, 
      date_creation: new Date(), status, _id, };
    return res.status(201).json({ create });
  } catch (err) {
    next(err)
  }
};

module.exports = createToDoList;