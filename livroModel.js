const bd = require('./bd');

function buscarLivroPorTitulo(titulo, callback) {
  bd.query('SELECT * FROM livros WHERE titulo LIKE ?', [`%${titulo}%`], callback);
}

function buscarLivroPorAno(ano, callback) {
  bd.query('SELECT * FROM livros WHERE ano = ?', [ano], callback);
}

function mostrarTodos(callback) {
  bd.query('SELECT * FROM livros', callback);
}

module.exports = {
  buscarLivroPorTitulo,
  buscarLivroPorAno,
  mostrarTodos
};
