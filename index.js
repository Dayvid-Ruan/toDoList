const Express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
;

const toDoListRouter = require('./router/toDoListRouter');
const error = require('./middlewares/error');

const app = Express();
const PORT = process.env.PORT;

app.use(bodyParser.json())
app.post('/', toDoListRouter);

app.listen(PORT, () => console.log(`runing app on port ${PORT}!`));
app.use(error);