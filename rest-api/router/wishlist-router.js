var CartController=require('../controller/admin/cart-controller')
module.exports=function(endPoint){

    //Mapping for add profile
    //@RequestMapping(value="profiles",method=RequestMethod.POST)

    //endPoint.get("/admin/products",ProductController.findProducts);
    //endPoint.get("/admin/products/:pid",ProductController.getProduct);
    //endPoint.get("/admin/products/image/:imageUrl",ProductController.getImage);

    endPoint.put("/admin/wishlist",CartController.editWishList);
  
    endPoint.get("/admin/wishlist",CartController.findWishLists);

    endPoint.get("/admin/wishlist/:cid",CartController.getWishList);

    endPoint.post("/admin/wishlist",CartController.postWishList);
    
};
