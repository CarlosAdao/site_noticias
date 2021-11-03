module.exports = function(){

    this.getNoticias = function(connection, callback){
        connection.query('SELECT * FROM noticias', callback);
        // connection.connect(function(err) {
        // if (err) {
        //     return console.error('error: ' + err.message);
        // }
        
        // console.log('Connected to the MySQL server.');
        // });
    }

    this.getNoticia = function(connection, callback){
        connection.query('SELECT * FROM noticias WHERE id = 1', callback);
    }

    this.salvarNoticia = function(noticia, connection, callback) { 
        connection.query('INSERT INTO noticias SET ? ', noticia, callback)  
    }

    return this;
}