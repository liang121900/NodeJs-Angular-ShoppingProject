/**
 *  This fill will make a
 *  connection to the database
 *  This file is known as module
 */
//creating mongoose to define schema
//This mongoose is ORM for 
var mongoose = require('mongoose');
var LoginSchema  = new mongoose.Schema({
    username: { type: String,required: true, unique: true },
    password: { type: String},
    role: { type: String},
    llt: { type: Date},
    status: { type: String},
    doe: {type: Date},
    dom: {type: Date},
    },{collection: 'logins'});

        //on every save, add the date
 LoginSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();
    // change the updated_at field to current date
    this.dom = currentDate;
    // if created_at doesn't exist, add to that field
    if (!this.doe){
      this.doe = currentDate;
    } 
    next(); //means go ahead and save it into db now
});

//Here we are registering ProfileSchema as model in mongoose
var LoginEntity=mongoose.model('Login', LoginSchema);
//exporting object ProfileEntity
module.exports=LoginEntity;
