const updateToDoListServices = require('../services/updateToDoList');

const updateToDoList = async (req, res, next) => {
  const { task, status } = req.body;
  const { id } = req.params;
  try {
    const _id = await updateToDoListServices(id, task, status);
    const update = { _id: id, task, status };
    return res.status(200).json({ update });
  } catch (err) {
    next(err);
  }
}

module.exports = updateToDoList;