const {ObjectId} = require('mongodb');
const deleteToDoListModels = require('../models/deleteToDoList');

const deleteToDoList = async (id) => {
  if (!ObjectId.isValid(id)) {
    const err = { status: 400, message: 'Wrong id format' };
    throw err;
  }
  const idExist = await deleteToDoListModels.findById((id));

  if (!idExist) {
    const err = { status: 404, message: 'id not found' };
    throw err;
  }

  const deleted = await deleteToDoListModels.deleteToDoList(id);
  return deleted;
};

module.exports = deleteToDoList;