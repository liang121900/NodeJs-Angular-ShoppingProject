var mongoose = require('mongoose');
var AdertisementSchema  = new mongoose.Schema({
    adId: { type: String,required: true, unique: true },
    title: { type: String},
    orgPrice: { type: String},
    discountPrice: { type: String},
    endDate: { type: Date},
    startDate: { type: Date },
    description: { type: String},
    imageUrl: { type: String },
    subtitle: {type: String},
    productId: {type: String},
    },{collection: 'advertisement_colletions'});

    //on every save, add the date
    AdertisementSchema.pre('save', function(next) {
        // get the current date
        var currentDate = new Date();
        if (!this.startDate){
            this.startDate = currentDate;
        } 
        next(); //means go ahead and save it into db now
    }
);

//Here we are registering ProductEntity as model in mongoose
var AdertisementSchema=mongoose.model('Advertisement', AdertisementSchema);
//exporting object ProfileEntity
module.exports=AdertisementSchema;
