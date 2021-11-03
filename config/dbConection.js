var mysql = require('mysql');

var connMysql = function() {
    console.log("Conexão com o banco de dados estabelecida");
    return mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'123456',
        database:'portal_noticias'
    });    
}

module.exports = function() {
    console.log("O Auto load carregou a conexão com o banco de dados");
    return connMysql;
}

        