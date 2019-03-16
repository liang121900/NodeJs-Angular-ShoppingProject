var mongoose = require('mongoose');
var SliderSchema = new mongoose.Schema({
    topSmallText: { type:String, required: true},
    boldText: { type:String },
    paraText: { type:String },
    btnOneText: { type:String },
    btnTwoText: { type:String },
    image: { type:String },
    doe: {type: Date},
    dom: {type: Date},
    selected:{type:String},
},{collection:'slider_collections'});

SliderSchema.pre('save', function(next) {
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

var SliderEntity=mongoose.model('Slider',SliderSchema);
module.exports=SliderEntity;