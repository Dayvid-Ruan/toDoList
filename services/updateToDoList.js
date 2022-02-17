const { ObjectId } = require('mongodb');
const updateToDoListModels = require('../models/updateToDoList');
const findId = require('../middlewares/findById');

const JOI = require('joi');

const validateTask = JOI.object({
  task: JOI.string().required(),
});

const updateToDoList = async (id, task, status) => {
  if (!ObjectId.isValid(id)) {
    const err = { status: 400, message: 'Wrong id format' };
    throw err;
  }

  const { error } = await validateTask.validate({ task });
  if (error) {
    const err = { status: 400, message: error.message };
    throw err;
  }

  const idExist = await findId.findById((id));

  if (!idExist) {
    const err = { status: 404, message: 'id not found' };
    throw err;
  }

  const update = await updateToDoListModels(id, task, status);
  return update;
};

module.exports = updateToDoList;