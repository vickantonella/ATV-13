// model.js

const livros = [
  { id: 1, titulo: 'Interestelar', autor: 'Christopher Nolan', ano: 2016 },
  { id: 2, titulo: 'A Guerra dos Tronos', autor: 'George R. R. Martin', ano: 1996 },
  { id: 3, titulo: 'Quatro Vidas de um Cachorro', autor: 'W. Bruce Cameron', ano: 1996 },
  { id: 4, titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry', ano: 1943 },
  { id: 5, titulo: 'Romeu E Julieta', autor: 'William Shakespeare', ano: 1597 }
];

function buscarLivroPorTitulo(titulo) {
  return livros.filter(livro => livro.titulo.toLowerCase().includes(titulo.toLowerCase()));
}

function buscarLivroPorAno(ano) {
  return livros.filter(livro => livro.ano === parseInt(ano));
}

module.exports = {
  buscarLivroPorTitulo,
  buscarLivroPorAno,
  livros
};
