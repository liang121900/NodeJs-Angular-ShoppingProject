/**
 *  This fill will make a
 *  connection to the database
 *  This file is known as module
 */
//creating mongoose to define schema
//This mongoose is ORM for 
var mongoose = require('mongoose');
var ProfileSchema  = new mongoose.Schema({
    pid: { type: String,required: true, unique: true },
    name: { type: String},
    email: { type: String},
    username: { type: String},
    mobile: { type: String},
    password: { type: String},
    gender: { type: String},
    photo: { data: Buffer, contentType: String },
    doe: {type: Date},
    dom: {type: Date},
    },{collection: 'profiles_data'});

        //on every save, add the date
ProfileSchema.pre('save', function(next) {
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
var ProfileEntity=mongoose.model('Profile', ProfileSchema);
//exporting object ProfileEntity
module.exports=ProfileEntity;
