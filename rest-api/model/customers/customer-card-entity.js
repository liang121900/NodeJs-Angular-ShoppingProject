/**
 *  This fill will make a
 *  connection to the database
 *  This file is known as module
 */
//creating mongoose to define schema
//This mongoose is ORM for 
var mongoose = require('mongoose');
var CustomerCardSchema  = new mongoose.Schema({
    cardNumber: { type: String,required: true, unique: true },
    customerId: { type: String},
    cardType: { type: String},
    expDate: { type: Date},
    doe: {type: Date},
    dom: {type: Date},
    },{collection: 'card_collection'});

        //on every save, add the date
 CustomerCardSchema.pre('save', function(next) {
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
var CustomerCardEntity=mongoose.model('CustomerCard', CustomerCardSchema);
//exporting object ProfileEntity
module.exports=CustomerCardEntity;
