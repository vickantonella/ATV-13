// controller.js
const livrosModel = require('./model');

function buscarLivro(req, res) {
  const { titulo, ano, tipoBusca } = req.query;

  if (!tipoBusca) {
    return res.render('index', { resultado: [], error: 'Por favor, selecione o tipo de busca.' });
  }

  if (tipoBusca === 'titulo' && titulo) {
    const resultado = livrosModel.buscarLivroPorTitulo(titulo);
    return res.render('index', { resultado });
  }

  if (tipoBusca === 'ano' && ano) {
    const resultado = livrosModel.buscarLivroPorAno(ano);
    return res.render('index', { resultado });
  }

  res.render('index', { resultado: [], error: 'Por favor, insira um título válido ou um ano válido para a busca.' });
}

function mostrarTodosLivros(req, res) {
  const resultado = livrosModel.livros;
  res.render('index', { resultado });
}

function indexPage(req, res) {
  res.render('index', { resultado: [], error: null });
}

module.exports = {
  buscarLivro,
  mostrarTodosLivros,
  indexPage
};
