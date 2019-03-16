TopVendorEntity=require('../../model/top-vendors-entity')


module.exports.findTopVendors=(req,res)=> {
    TopVendorEntity.find({},function(err,data){
        res.status(200).json(data);
    });
 
 }