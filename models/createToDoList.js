const connection = require('./connection');

const createToDoList = async (task, status) => {
  const conn = await connection();
  await conn.collection('tasks').insertOne(task, status);
  return { task, status };
}

module.exports = {
  createToDoList,
}