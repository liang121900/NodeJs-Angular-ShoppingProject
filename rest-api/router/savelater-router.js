var CartController=require('../controller/admin/cart-controller')
module.exports=function(endPoint){

    //Mapping for add profile
    //@RequestMapping(value="profiles",method=RequestMethod.POST)

    //endPoint.get("/admin/products",ProductController.findProducts);
    //endPoint.get("/admin/products/:pid",ProductController.getProduct);
    //endPoint.get("/admin/products/image/:imageUrl",ProductController.getImage);

    endPoint.put("/admin/savelater",CartController.editSaveLaterList);
  
    endPoint.get("/admin/savelater",CartController.findSaveForLaterLists);

    endPoint.get("/admin/savelater/:cid",CartController.getSaveLaterList);

    endPoint.post("/admin/savelater",CartController.postSaveLater);

    
};
