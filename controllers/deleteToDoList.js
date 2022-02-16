const deleteToDoListService = require('../services/deleteToDoList');

const deleteToDoList = async (req, res, next) => {
  const { id } = req.params;
  try {
    const _id = await deleteToDoListService(id);
    const deleted = {_id: id};
    return res.status(200).json({ deleted });
  } catch(err) {
    next(err);
  };
};

  module.exports = deleteToDoList; 