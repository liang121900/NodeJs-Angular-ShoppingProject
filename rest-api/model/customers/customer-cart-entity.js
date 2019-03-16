var mongoose = require('mongoose');
var CustomerCartSchema  = new mongoose.Schema({
    username: { type: String,required: true, unique: true },
    products: {type:[String],default:[]},
    doe: {type: Date},
    dom: {type: Date}
    },{collection: 'shopping_cart_collections'});

    //on every save, add the date
    CustomerCartSchema.pre('save', function(next) {
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

var cartEntity=mongoose.model('ShoppingCart', CustomerCartSchema);
//exporting object ProfileEntity
module.exports=cartEntity;