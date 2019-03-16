var SearchController=require('../controller/admin/search-controller')
module.exports=function(endPoint){

    //endPoint.get("/admin/featured",FeaturedController.save);
    endPoint.get("/admin/search",SearchController.getSearchProduct);
   
    
}