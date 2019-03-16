var mongoose=require('mongoose');
var SearchSchema=new mongoose.Schema({
    pid:{type:String,required:true,unique:true},
    imageUrl:{type:String},
    title:{type:String},
    sprice:{type:String},
    dprice:{type:String},
    category:{type:String},
    
    userid: { type: String},
    doe:{type:Date},
    dom:{type:Date}
},{collection:'search_collections'});

//save the data with date
SearchSchema.pre('save',function(next){
    var currentDate=new Date();
    this.dom=currentDate;
    //if not exist
    if(!this.doe){
        this.doe=currentDate;
    }
  
    next();
});


var SearchEntity=mongoose.model('search',SearchSchema);
module.exports=SearchEntity;