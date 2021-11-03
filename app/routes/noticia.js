module.exports = function(app){    
    app.get('/noticia', function(req, res){
        var connection =  app.config.dbConection();
        var noticiaModel = app.app.models.noticiaModel;

        noticiaModel.getNoticia(connection, function(error, result) {
            res.render("noticias/noticia", {noticias : result});
        });
    });
};