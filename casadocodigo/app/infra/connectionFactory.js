var mysql = require('mysql');

var connectMYSQL = function () {

    if (!process.env.NODE_ENV) {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'casadocodigo_nodejs'
        });
    }

    if (process.env.NODE_ENV == 'test') {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'casadocodigo_nodejs_test'
        });
    }
};

// wrapper: uma função que embrulha a outra.
// O connectMYSQL de fato só será invocado quando 
// nós carregarmos o objeto!
module.exports = function(){
    return connectMYSQL;
}