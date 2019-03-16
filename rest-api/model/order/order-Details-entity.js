/**
 *  This fill will make a
 *  connection to the database
 *  This file is known as module
 */
//creating mongoose to define schema
//This mongoose is ORM for 
var mongoose = require('mongoose');
var OrderDetailSchema  = new mongoose.Schema({
    orderId: { type: String,required: true, unique: true },
    products: {type:String},
    doe: {type: Date},
    dom: {type: Date}
    },{collection: 'order_detail_colletions'});

    //on every save, add the date
   OrderDetailSchema.pre('save', function(next) {
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

var ItemSchema = new mongoose.Schema({
  pid:{type:String},
  quantity:{type:Number},
  unitPrice:{type:Number}
});
//Here we are registering OrderDetailEntity as model in mongoose
var OrderDetailEntity=mongoose.model('OrderDetail', OrderDetailSchema);
var ItemEntity = mongoose.model('Item', ItemSchema);
//exporting object ProfileEntity
module.exports=OrderDetailEntity;