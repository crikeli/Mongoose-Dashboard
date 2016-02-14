//communicates to the controller because the controller contains all the functions pertaining to our routes
//kangaroos from var kangaroos is used in kangaroos.Index (line 6) 
var kangaroos = require('../controllers/kangaroos.js');

module.exports = function(app){

	//All the route handlers 
	app.get('/', 				            function(req, res){ kangaroos.Index(req, res); });
	app.get('/kangaroo/new', 		        function(req, res){ kangaroos.Create(req, res); });
	app.get('/kangaroo/:id',                function(req, res){ kangaroos.Get(req, res); });
	app.post('/',                           function(req, res){ kangaroos.Post(req, res); });
	app.get('/kangaroo/:id/edit',           function(req, res){kangaroos.Edit(req, res); });
	app.post('/kangaroo/:id',               function(req, res){kangaroos.Update(req, res); });
	app.get('/kangaroo/:id/destroy',        function(req, res){kangaroos.Destroy(req, res); });

}