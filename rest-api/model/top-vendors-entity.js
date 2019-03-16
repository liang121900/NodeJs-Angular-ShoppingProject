var mongoose = require('mongoose');
var TopVendorSchema  = new mongoose.Schema({
    topVendorPosition: { type:Number ,required: true, unique: true },
    vcode: { type: String,required: true, unique: true },
    avgProductRatings: { type:Number },
    numRatings: { type:Number }
    },{collection: 'top_vendor_colletions'});
//Here we are registering ProductEntity as model in mongoose
var TopVendorSchema=mongoose.model('TopVendors', TopVendorSchema);
//exporting object ProfileEntity
module.exports=TopVendorSchema;