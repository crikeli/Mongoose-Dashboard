// Require the Express and path Module
var express = require("express");
var path = require("path");
// Create an Express App
var app = express();
//create a "path module" (don't know what this does)
var path = require("path");
// Require body-parser (to recieve post data from clients)
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
// Setting our Static Folder Directory
app.use(express.static(__dirname + "./client/static"));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './client/views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

//require the mongoose configuration file that contains info pertaining to mongoose 
require('./server/config/mongoose.js')

//linking the module and require between server.js and routes.js
var routes_setter = require('./server/config/routes.js')
//invoke the function in routes setter and pass in the (app) variable
routes_setter(app);

//Set up server to listen on port: 8000
app.listen(8000, function() {
	console.log("listening to port 8000");
});