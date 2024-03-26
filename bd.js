const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'viaduct.proxy.rlwy.net',
  user: 'root',
  password: 'dhfzZvVYzukpfSfFSgdJBlXMFGdhDGXR',
  database: 'railway',
  port: 36065
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados MySQL.');
});

module.exports = connection;
