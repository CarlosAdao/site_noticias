//Faz o require do express
var express = require('express');

//Faz o require do consign
var consign = require('consign');

//Faz o require do body parser
var bodyParser = require('body-parser');

//Inicia o express
var app = express();

//Adicionando o engine de view EJS
app.set('view engine', 'ejs');

//Indica o diretório onde será buscado as views
app.set('views', './app/views');

//Incluindo o body middle no body parser
app.use(bodyParser.urlencoded({extended: true}));


//Passando a referência do consign para o express
consign()
.include('app/routes')
.then('config/dbConection.js')
.then('app/models')
.into(app);

module.exports = app;