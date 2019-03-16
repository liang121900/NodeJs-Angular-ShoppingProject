/**
 *  This fill will make a
 *  connection to the database
 *  This file is known as module
 */
//creating mongoose to define schema
//This mongoose is ORM for 
var mongoose = require('mongoose');
var ProductSchema  = new mongoose.Schema({
    pid: { type: String,required: true, unique: true },
    sku: { type: String},
    title: { type: String},
    category: { type: String},
    brands: { type: String},
    color: { type: String},
    size: { type: Number},
    weight: { type: String},
    items: { type: Number},
    price: { type: Number},
    sprice: { type: Number},
    stock: { type: String},
    overview: { type: String},
    techSpecs: { type: String},
    description: { type: String},
    features: { type: String},
    reviews: { type: String},
    rewardPoints: { type: Number},
    imageUrl: {type:String },
    doe: {type: Date},
    dom: {type: Date},
    userid: { type: String}
    },{collection: 'products_colletions'});

        //on every save, add the date
   ProductSchema.pre('save', function(next) {
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

//Here we are registering ProductEntity as model in mongoose
var ProductEntity=mongoose.model('Product', ProductSchema);
//exporting object ProfileEntity
module.exports=ProductEntity;
