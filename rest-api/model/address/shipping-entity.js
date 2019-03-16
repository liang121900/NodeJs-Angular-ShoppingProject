/**
 *  This fill will make a
 *  connection to the database
 *  This file is known as module
 */
//creating mongoose to define schema
//This mongoose is ORM for 
var mongoose = require('mongoose');
var ShippingSchema  = new mongoose.Schema({
    bid: { type: String,required: true, unique: true },
    firstName: { type: String},
    lastName: { type: String},
    streetName: { type: String},
    city: { type: String},
    zipCode: { type: String},
    district: { type: String},
    country: { type: String},
    phoneNumber: { type: Number},
    email: { type: String}
    },{collection: 'shipping_colletions'});

//Here we are registering ShippingEntity as model in mongoose
var ShippingEntity=mongoose.model('Shipping', ShippingSchema);
//exporting object ProfileEntity
module.exports=ShippingEntity;
