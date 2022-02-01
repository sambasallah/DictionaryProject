const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public/static'));
app.use(express.static('public/views'));
app.set('views', __dirname + "/public/views");
app.use(express.json());
app.use(express.urlencoded());

// controllers
const dictionary_controller = require('./controllers/dictionaryController');

app.get('/find',dictionary_controller.get_defination);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});