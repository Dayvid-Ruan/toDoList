const Express = require('express');
const bodyParser = require('body-parser')

const app = Express();
const PORT = 3001;
app.use(bodyParser.json())

app.listen(PORT, () => console.log(`runing app on port ${PORT}!`));