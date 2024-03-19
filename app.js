// app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const controller = require('./controller');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', controller.indexPage);
app.get('/buscar', controller.buscarLivro);

app.get('/mostrar-todos', controller.mostrarTodosLivros);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
