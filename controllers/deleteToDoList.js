const deleteToDoListService = require('../services/deleteToDoList');

const deleteToDoList = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleted = await deleteToDoListService(id);
    return res.status(200).json({ deleted });
  } catch(err) {
    next(err);
  };
};

  module.exports = deleteToDoList; 