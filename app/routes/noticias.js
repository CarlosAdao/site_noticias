

module.exports = function(application){    
    
    application.get('/noticias', function(req, res){
        var connection =  application.config.dbConection();
        var noticiaModel = application.app.models.noticiaModel;

        noticiaModel.getNoticias(connection, function(error, result) {
            res.render("noticias/noticias", {noticias : result });
        });
    });

};