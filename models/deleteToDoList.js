const { ObjectId } = require('mongodb')
const connection = require('./connection');

const deleteToDoList = async (id) => {
  const conn = await connection();
  const deleted = await conn.collection('tasks').deleteOne({ _id: ObjectId(id) });
  return deleted
}

const findById = async (id) => {
  const conn = await connection();
  const findId = await conn.collection('tasks').findOne({ _id: ObjectId(id) });
  return findId;
}

module.exports = {
  deleteToDoList,
  findById,
};