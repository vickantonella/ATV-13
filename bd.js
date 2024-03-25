const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'roundhouse.proxy.rlwy.net',
  user: 'root',
  password: 'KkaUtuMwNYyoWFirkglfGJfiKZPEjUUJ',
  database: 'railway',
  port: 22285
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados MySQL.');
});

module.exports = connection;
