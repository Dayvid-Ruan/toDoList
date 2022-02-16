const { ObjectId } = require('mongodb');
const connection = require('./connection');

const updateToDoList = async (id, task) => {
  const conn = await connection();
  const update = await conn.collection('tasks').updateOne(
    { _id: ObjectId(id) }, { $set: { task } });
  return update;
};

module.exports = updateToDoList;