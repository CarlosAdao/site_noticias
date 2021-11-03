module.exports = function(application){
    application.get('/formulario_inclusao_noticia', function(req, res){
        res.render("admin/form_add_noticia");
    });

    application.post('/noticias/salvar', function(req, res){
        var noticia = req.body;

        //Estabelece a conexão com o banco de dados
        var connection =  application.config.dbConection();
        
        //Recupera o model
        var noticiaModel = application.app.models.noticiaModel;

        noticiaModel.salvarNoticia(noticia, connection, function(error, result) {
            console.log(result)
            // res.render("noticias/noticias", {noticias : result });
        });
    });
};