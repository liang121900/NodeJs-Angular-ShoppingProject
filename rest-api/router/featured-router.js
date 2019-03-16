var FeaturedController=require('../controller/admin/featured-controller')
module.exports=function(endPoint){

    //endPoint.get("/admin/featured",FeaturedController.save);
    endPoint.get("/admin/featured",FeaturedController.getFeaturedProduct);
    
}