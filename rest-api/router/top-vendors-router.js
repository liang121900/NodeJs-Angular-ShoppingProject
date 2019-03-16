var TopVendorController=require('../controller/admin/top-vendor-controller')
module.exports=function(endPoint){
    
    endPoint.get("/admin/top-vendor",TopVendorController.findTopVendors);
    
};