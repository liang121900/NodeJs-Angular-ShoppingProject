/**
 *  This fill will make a
 *  connection to the database
 *  This file is known as module
 */
var mongoose = require('mongoose');

/**
 * When you call this method then it would
 * connect you to the database
 */
module.exports=function() {
	var conn = mongoose.connection;
	conn.on('error', console.error);
	conn.once('open', function() {
		//	Create your schemas and models here.
		console.log("Opening connection to database!");
	});
	mongoose.connect('mongodb://localhost:27017/shopping_cart_db');
};