const createToDoListModel = require('../models/createToDoList');
const JOI = require('joi');

const validateTask = JOI.object({
  task: JOI.string().required(),
  status: JOI.string().required(),
});

const createToDoList = async (task, status, date,) => {
  const { error } = await validateTask.validate({ task, status });
  if (error) {
    const err = { status: 400, message: error.message };
    throw err;
  }
  const validateStatus = status === 'Pendente' || status === 'Em andamento' || status === 'Pronto';
  if (!validateStatus) {
  const err = { status: 400, message: 'status invalido' };
  throw err;
}

  const create = await createToDoListModel.createToDoList({ task, 
    date_creation: new Date(), status });
  return create.insertedId;
};

module.exports = createToDoList;
