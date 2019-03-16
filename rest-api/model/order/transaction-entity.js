/**
 *  This fill will make a
 *  connection to the database
 *  This file is known as module
 */
//creating mongoose to define schema
//This mongoose is ORM for 
var mongoose = require('mongoose');
var TransactionSchema  = new mongoose.Schema({
    tid: { type: String,required: true, unique: true },
    type: { type: String},
    total: { type: Number},
    status: { type: String},
    orderId: { type: String},
    orderNotes: { type: String},
    doe: {type: Date},
    dom: {type: Date}
    },{collection: 'transactions_colletions'});

        //on every save, add the date
   TransactionSchema.pre('save', function(next) {
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

//Here we are registering TransactionEntity as model in mongoose
var TransactionEntity=mongoose.model('Transaction', TransactionSchema);
//exporting object ProfileEntity
module.exports=TransactionEntity;
