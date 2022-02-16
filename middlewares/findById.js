const { ObjectId } = require('mongodb')
const connection = require('../models/connection');

const findById = async (id) => {
  const conn = await connection();
  const findId = await conn.collection('tasks').findOne({ _id: ObjectId(id) });
  return findId;
}

module.exports = {
  findById,
}