var BestSellerController=require('../controller/admin/bestseller-controller')
module.exports=function(endPoint){

    //endPoint.get("/admin/featured",FeaturedController.save);
    endPoint.get("/admin/bestseller",BestSellerController.getBestsellerProduct);
    
}