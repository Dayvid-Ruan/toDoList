const connection = require('./connection');

const createToDoList = async (task) => {
  const conn = await connection();
  const create = await conn.collection('tasks').insertOne({ task });
  return create;
}

module.exports = {
  createToDoList,
}