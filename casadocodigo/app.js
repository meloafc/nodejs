var app = require ('./config/express')();

app.get('/produtos', function(request, response) {
	response.render("produtos/lista");
});

app.listen(3000, function() {
	console.log("servidor rodando");
});