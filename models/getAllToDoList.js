const connection = require('./connection');

const getAllToDoList = async () => {
  const conn = await connection();
  const getAll = await conn.collection('tasks').find().toArray();
  return getAll;
};

module.exports = getAllToDoList;