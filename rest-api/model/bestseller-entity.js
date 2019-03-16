var mongoose=require('mongoose');
var BestSellerSchema=new mongoose.Schema({
    pid:{type:String,required:true,unique:true},
    imageUrl:{type:String},
    title:{type:String},
    sprice:{type:String},
    dprice:{type:String},
    subtitle:{type:String},
    titlel:{type:String},
    userid: { type: String},
    doe:{type:Date},
    dom:{type:Date}
},{collection:'seller_collections'});

//save the data with date
BestSellerSchema.pre('save',function(next){
    var currentDate=new Date();
    this.dom=currentDate;
    //if not exist
    if(!this.doe){
        this.doe=currentDate;
    }
  
    next();
});


var BestSellerEntity=mongoose.model('bestSeller',BestSellerSchema);
module.exports=BestSellerEntity;