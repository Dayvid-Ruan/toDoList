const connection = require('./connection');

const getAllToDoList = async () => {
  const conn = await connection();
  const getAll = await conn.collection('tasks').find().sort({ task: 1, date: 1, status: 1 }).toArray();
  return getAll;
};

module.exports = getAllToDoList;