
var ProductController=require('../controller/admin/product-controller')

var matchQueryString = function(req, res, next) {
    if(req.query.page)
        ProductController.findProductsWithPageNumberAndSortByDate(req,res);
    else
        next();
  };

module.exports=function(endPoint){

    //Mapping for add profile
    //@RequestMapping(value="profiles",method=RequestMethod.POST)
    endPoint.get("/admin/products",matchQueryString,ProductController.findProducts);
    endPoint.get("/admin/products/:pid",ProductController.getProduct);
    endPoint.get("/admin/products/image/:imageUrl",ProductController.getImage);
    endPoint.post("/admin/products",ProductController.postProducts);
	endPoint.post("/admin/productsbyids",ProductController.findProductsByIds);
	endPoint.get("/review",ProductController.getAllProductReviews);
	
    endPoint.get("/admin/products/:pid/review",ProductController.getProductReviews);
    endPoint.post("/admin/products/review",ProductController.postProductReview);
    endPoint.get("/admin/products/:pid/rating",ProductController.getProductRating);

    endPoint.post("/admin/products/:pid/sharingEmail/:sharingEmail",ProductController.sendSharingEmail);
    




};
