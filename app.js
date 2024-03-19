// Importação dos módulos necessários
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const ejs = require('ejs');

// Inicialização da aplicação Express
const app = express();
const port = 3000;

// Dados simulados de livros
const livros = [
{ id: 1, titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', ano: 1955 },
{ id: 2, titulo: 'Duna', autor: 'Frank Herbert', ano: 1813 },
{ id: 3, titulo: 'Harry Potter e a Pedra Filosofal', autor: 'J.K. Rowling', ano: 1997 },
{ id: 4, titulo: 'Fundação', autor: 'Jane Austen', ano: 1951 },
{ id: 5, titulo: 'Orgulho e Preconceito', autor: 'J.R.R. Tolkien', ano: 1954 },
{ id: 6, titulo: '1984', autor: 'George Orwell', ano: 1949 },
{ id: 7, titulo: 'A Revolução dos Bichos', autor: 'George Orwell', ano: 1945 },
];

// Função para buscar livros por título
function buscarLivroPorTitulo(titulo) {
  return livros.filter(livro => livro.titulo.toLowerCase().includes(titulo.toLowerCase()));
}

// Função para buscar livros por ano
function buscarLivroPorAno(ano) {
  return livros.filter(livro => livro.ano === parseInt(ano));
}

// Configuração do mecanismo de visualização EJS
app.set('view engine', 'ejs');

// Middleware para análise de corpos de requisição com codificação URL-encoded
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware para servir arquivos estáticos do diretório 'public'
app.use(express.static('public'));

// Rota raiz da aplicação
app.get('/', (req, res) => {
  // Renderiza o arquivo 'index.ejs' com um objeto vazio como resultado inicial
  res.render('index', { resultado: {} });
});

// Rota para buscar livros com base nos parâmetros de consulta
app.get('/buscar', (req, res) => {
  // Extrai os parâmetros de consulta da requisição
  const { titulo, ano, tipoBusca } = req.query;
  let resultado = [];

  // Verifica o tipo de busca e chama a função correspondente para buscar os livros
  if (tipoBusca === 'titulo') {
    resultado = buscarLivroPorTitulo(titulo);
  } else if (tipoBusca === 'ano') {
    resultado = buscarLivroPorAno(ano);
  }

  res.render('index', { resultado });
});

app.get('/buscar/:ano', (req, res) => {
  const ano = req.params.ano;
  const resultado = buscarLivroPorAno(ano);
  res.render('index', { resultado });
});

// Rota para mostrar todos os livros
app.get('/mostrar-todos', (req, res) => {
  res.render('index', { resultado: livros });
});

// Inicia o servidor Express na porta especificada
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
