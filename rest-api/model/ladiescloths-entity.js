var mongoose=require('mongoose');

var LadiesclothsSchema=new mongoose.Schema({
    pid:{type:String,required:true,unique:true},
    subtitle:{type:String},
    title:{type:String},
    description:{type:String},
    userid:{type:String},
    doe:{type:Date},
    dom:{type:Date}
},{collection:'ladiescloths_collections'});

LadiesclothsSchema.pre('save',function(next){
    var currentDate=new Date();
    this.dom=currentDate;
    if(!this.doe){
        this.doe=currentDate;
    }
    next();
});

var LadiesclothsEntity=mongoose.model('Ladiescloths',LadiesclothsSchema);
module.exports=LadiesclothsEntity;

