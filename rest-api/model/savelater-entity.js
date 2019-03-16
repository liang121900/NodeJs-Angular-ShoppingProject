/**
 *  This fill will make a
 *  connection to the database
 *  This file is known as module
 */
//creating mongoose to define schema
//This mongoose is ORM for 
var mongoose = require('mongoose');
var SaveLaterSchema  = new mongoose.Schema({
    sid: { type: String,required: true, unique: true },
    cid: { type: String,  unique: true },
    products:[],
    doe: {type: Date},
    dom: {type: Date},
    },{collection: 'savelaters'});

        //on every save, add the date
 SaveLaterSchema.pre('save', function(next) {
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
var SaveLaterEntity=mongoose.model('SaveLater', SaveLaterSchema);
//exporting object ProfileEntity
module.exports=SaveLaterEntity;
