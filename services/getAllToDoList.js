const getAllToDoListModel = require('../models/getAllToDoList');

const getAllToDoList = async () => {
  const getAll = await getAllToDoListModel();
  return getAll;
};

module.exports = getAllToDoList;