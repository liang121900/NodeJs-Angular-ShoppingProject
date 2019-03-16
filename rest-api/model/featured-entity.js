var mongoose=require('mongoose');
var FeaturedSchema=new mongoose.Schema({
    pid:{type:String,required:true,unique:true},
    imageUrl:{type:String},
    title:{type:String},
    sprice:{type:String},
    dprice:{type:String},
    rating:{type:String},
    subtitle:{type:String},
    titles:{type:String},
    doe:{type:Date},
    dom:{type:Date},
    userid: { type: String}
},{collection:'featured_collections'});

//save the data with date
FeaturedSchema.pre('save',function(next){
    var currentDate=new Date();
    this.dom=currentDate;
    //if not exist
    if(!this.doe){
        this.doe=currentDate;
    }
  
    next();
});


var FeaturedEntity=mongoose.model('Featured',FeaturedSchema);
module.exports=FeaturedEntity;