/**
 *  This fill will make a
 *  connection to the database
 *  This file is known as module
 */
//creating mongoose to define schema
//This mongoose is ORM for 
var mongoose = require('mongoose');
var WishListSchema  = new mongoose.Schema({
    wid: { type: String, required: true, unique: true },
    cid: { type: String, unique: true },
    products:[],
    doe: {type: Date},
    dom: {type: Date},
    },{collection: 'wishlists'});

        //on every save, add the date
 WishListSchema.pre('save', function(next) {
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
var WishListEntity=mongoose.model('WishList', WishListSchema);
//exporting object ProfileEntity
module.exports=WishListEntity;
