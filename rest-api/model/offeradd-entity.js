var mongoose=require('mongoose');
var OffersAddSchema=new mongoose.Schema({
    pid:{type:String,required:true,unique:true},
    imageUrl:{type:String},
    title:{type:String},
    status:{type:String},
    userid: { type: String},
    doe:{type:Date},
    dom:{type:Date}
},{collection:'offerad_collections'});

//save the data with date
OffersAddSchema.pre('save',function(next){
    var currentDate=new Date();
    this.dom=currentDate;
    //if not exist
    if(!this.doe){
        this.doe=currentDate;
    }
        next();
});


var OfferAddEntity=mongoose.model('offeradd',OffersAddSchema);
module.exports=OfferAddEntity;