var OfferaddController=require('../controller/admin/offeradd-controller')
module.exports=function(endPoint){

    //endPoint.get("/admin/featured",FeaturedController.save);
    endPoint.get("/admin/offeradd",OfferaddController.getOfferAdd);
    
}