var mysql = require('mysql');

function connectMYSQL(){
    return mysql.createConnection({
                host:'localhost',
                user:'root',
                password:'root',
                database:'casadocodigo_nodejs'
          });
}

// wrapper: uma função que embrulha a outra.
// O connectMYSQL de fato só será invocado quando 
// nós carregarmos o objeto!
module.exports = function(){
    return connectMYSQL;
}