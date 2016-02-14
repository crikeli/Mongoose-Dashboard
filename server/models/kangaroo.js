var mongoose = require('mongoose');
//Create Schemas
var KangarooSchema = new mongoose.Schema({
	name: String,
	breed: String,
	age: Number,
	date: {type:Date,default: Date.now}
})
//Set Kangaroo Schema in our model
var Kangaroo = mongoose.model('Kangaroo', KangarooSchema);