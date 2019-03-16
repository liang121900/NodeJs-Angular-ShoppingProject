/**
 *  This fill will make a
 *  connection to the database
 *  This file is known as module
 */
//creating mongoose to define schema
//This mongoose is ORM for 
var mongoose = require('mongoose');
var BillingSchema  = new mongoose.Schema({
    bid: { type: String,required: true, unique: true },
    firstName: { type: String},
    lastName: { type: String},
    streetName: { type: String},
    city: { type: String},
    zipCode: { type: Number},
    district: { type: String},
    country: { type: String},
    phoneNumber: { type: Number},
    email: { type: String}
    },{collection: 'billing_colletions'});

//Here we are registering BillingEntity as model in mongoose
var BillingEntity=mongoose.model('Billing', BillingSchema);
//exporting object ProfileEntity
module.exports=BillingEntity;
