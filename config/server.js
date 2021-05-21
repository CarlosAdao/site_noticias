//Inicia o serviço do express
var express = require('express');
var app = express();

//Adicionando o engine de view EJS
app.set('view engine', 'ejs');

//Indica o diretório onde será buscado as views
app.set('views', './app/views')

module.exports = app;