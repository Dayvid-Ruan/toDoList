const { ObjectId } = require('mongodb')
const connection = require('./connection');

const deleteToDoList = async (id) => {
  const conn = await connection();
  const deleted = await conn.collection('tasks').deleteOne({ _id: ObjectId(id) });
  return deleted;
}

module.exports = {
  deleteToDoList,
};