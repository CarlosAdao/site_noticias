app = require('./config/server');

var rotaHome = require('./app/routes/home')(app);

var rotaFormularioInclusao = require('./app/routes/noticias')(app);

var rotaNoticias = require('./app/routes/noticias')(app);

app.listen(3000, function(){
    console.log("Servidor ON");
})