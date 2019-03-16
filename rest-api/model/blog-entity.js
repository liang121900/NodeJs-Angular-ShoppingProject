var mongoose=require('mongoose');
var uid=require('uid');
var BlogSchema=new mongoose.Schema({
    bid:{type:String,unique:true},
    image:{type:String},
    title:{type:String},
    description:{type:String},
    postDate:{type:Date},
    content:{type:String},
    tags:{type:[String],default:[]}
},{collection:'blog_collections'});

//save the data with date
BlogSchema.pre('save',function(next){
    if(!this.postDate){
        this.postDate=new Date();
    }
    if(!this.bid){
        this.bid=uid();
    }
    next();
});


var blogSchema=mongoose.model('Blog',BlogSchema);
module.exports=blogSchema;