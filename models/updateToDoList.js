const { ObjectId } = require('mongodb');
const connection = require('./connection');

const updateToDoList = async (id, task, status) => {
  const conn = await connection();
  const update = await conn.collection('tasks').updateOne(
    { _id: ObjectId(id) }, { $set: { task, status } });
  return update;
};

module.exports = updateToDoList;