var express = require('express');
var app = express();

//Adicionando o novo engine de view EJS
app.set('view engine', 'ejs');


//Trata as requisições com express
app.get('/', function(req, res){
    html = "<html><body>Home</body></html>"
    res.send(html)
})

//Trata as requisições com express
app.get('/noticias', function(req, res){
    html = "<html><body>Painel de noticias</body></html>"
    res.send(html)
})



app.listen(3000, function(){
    console.log("Servidor on");
})