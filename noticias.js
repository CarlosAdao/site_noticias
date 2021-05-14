var http  = require('http');

var server = http.createServer(function(req, res){

    var categoria = req.url;
    var html = "";

    if(categoria == "/noticias"){
        html = "<html><body>Retornando um portal de noticias</body></html>"
    }else{
        html = "<html><body>Retornando um portal de esporte</body></html>"
    }

    res.end(html);

});

server.listen(3000);