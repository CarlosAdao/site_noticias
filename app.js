var express = require('express');
var app = express();

//Trata as requisições com express
app.get('/', function(req, res){
    html = "<html><body>Retornando um portal de noticias</body></html>"
    res.send(html)
})


app.listen(3000, function(){
    console.log("Servidor on");
})