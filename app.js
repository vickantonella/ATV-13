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
{ id: 1, titulo: 'O Senhor dos Anéis', autor: 'Christopher Nolan', ano: 2016 },
{ id: 2, titulo: 'Duna', autor: 'Frank Herbert', ano: 1965 },
{ id: 3, titulo: 'A Origem', autor: 'Christopher Nolan', ano: 2010 },
{ id: 4, titulo: 'Fundação', autor: 'Isaac Asimov', ano: 1951 },
{ id: 5, titulo: 'Interestelar', autor: 'J.R.R. Tolkien', ano: 1954 },
{ id: 6, titulo: '1984', autor: 'George Orwell', ano: 1949 },
];

// Função para buscar livros por título
function buscarLivroPorTitulo(titulo) {
return livros.filter(livro =>
livro.titulo.toLowerCase().includes(titulo.toLowerCase()));
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

// Renderiza o arquivo 'index.ejs' com o resultado da busca
res.render('index', { resultado });
});

// Inicia o servidor Express na porta especificada
app.listen(port, () => {
console.log(`Servidor rodando em http://localhost:${port}`);
}); 