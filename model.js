// model.js

const livros = [
{ id: 1, titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', ano: 1955 },
{ id: 2, titulo: 'Duna', autor: 'Frank Herbert', ano: 1813 },
{ id: 3, titulo: 'Harry Potter e a Pedra Filosofal', autor: 'J.K. Rowling', ano: 1997 },
{ id: 4, titulo: 'Fundação', autor: 'Jane Austen', ano: 1951 },
{ id: 5, titulo: 'Orgulho e Preconceito', autor: 'J.R.R. Tolkien', ano: 1954 },
{ id: 6, titulo: '1984', autor: 'George Orwell', ano: 1949 },
{ id: 7, titulo: 'A Revolução dos Bichos', autor: 'George Orwell', ano: 1945 },
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
