var mongoose = require('mongoose');
//create the model so we can retrieve info from the schema
var Kangaroo = mongoose.model('Kangaroo');

module.exports = {

	//Displays All Kangaroos
	Index: function(req, res){
	Kangaroo.find({}, function (err, kangaroos){
		if (err){
			console.log("RUH ROH, No KANGAROOS FOUND");
		}
		else{
			console.log("FOUND KANGAROOS");
			res.render('index', {kangaroos:kangaroos});
		}
	})
	},

	//Leads to the Create New Kangaroo Form
	Create:  function(req, res){
	console.log("Made it to the new kangaroo creation form");
	res.render('kangaroo');
	},

	//Displays info about one Kangaroo
	Get:  function(req, res){
	//first param is the query document, the second is the callback
	Kangaroo.findOne({_id: req.params.id}, function (err, kangaroo){
		if (err){
			console.log("Could not get kangaroo by id");
		}
		else{
			console.log("Found Kangaroo with id", req.params.id);
			//loads a view called 'show.ejs' and passes the kangaroo object to the view
			res.render('show', {kangaroo:kangaroo});
		}

	});
	},

	//Form gets submitted and we are redirected to the main page!
	Post: function (req, res){
	console.log("POST DATA", req.body);
	//The following creates a new kangaroo in the database!
	var kangaroo = new Kangaroo ({name: req.body.name, breed: req.body.breed, age: req.body.age});
	//Now, we save the Kangaroo into the db
	kangaroo.save(function(err) {
		if (err){
			console.log('Ruh-Roh..Could not save Kangaroo to db!');
		}
		else{
			console.log('Hop-Hop!! Kangaroo Saved!!!');
			res.redirect('/')
		}
	});
	},

	//Route to the form that enables editing the kangaroo!
	Edit: function(req, res){
	Kangaroo.findOne({_id: req.params.id}, function (err, kangaroo){
		if (err){
			console.log("could not edit");
		}
		else {
			console.log("Continue to edit your Kangaroo!")
			res.render('edit', {kangaroo:kangaroo});
		}
	});
	},

	//Route that updates the Kangaroo after it is edited
	Update: function (req,res){
	Kangaroo.update({_id : req.params.id}, {name: req.body.name, breed: req.body.breed, age: req.body.age}, function (err, kangaroo){
		if (err){
			console.log(err)
		}
		else {
			console.log("Edited the object with id", req.params.id);
			res.redirect('/');
		}
	});
	},

	//Route that enables deletion of Kangaroos from db and page
	Destroy: function (req, res){
	Kangaroo.remove({_id: req.params.id}, function (err, kangaroo){
		if (err){
			console.log("could not destroy")
		}
		else {
			console.log("Successfully deleted object with id", req.params.id);
			res.redirect('/');
		}
	});
	}

}