

var mongoose = require('mongoose');
var ReviewSchema  = new mongoose.Schema({
    id: { type: String,required: true, unique: true },
    pid: {type: String},
    cid: { type: String},
    rating: { type: Number},
    description: { type: String},
    doe: {type: Date},
    dom: {type: Date},
    },{collection: 'Reviews_data'});

            //on every save, add the date
 ReviewSchema.pre('save', function(next) {
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

//Here we are registering ReviewSchema as model in mongoose
var ReviewEntity=mongoose.model('Review', ReviewSchema);
//exporting object ReviewEntity
module.exports=ReviewEntity;
