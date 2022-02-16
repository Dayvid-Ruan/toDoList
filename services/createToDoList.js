const createToDoListModel = require('../models/createToDoList');
const JOI = require('joi');

const validateTask = JOI.object({
  task: JOI.string().required(),
});

const createToDoList = async (task) => {
  const { error } = await validateTask.validate({ task });
  if (error) {
    const err = { status: 400, message: error.message };
    throw err;
  }
  const create = await createToDoListModel.createToDoList(task);
  return create.insertedId;
};

module.exports = createToDoList;
