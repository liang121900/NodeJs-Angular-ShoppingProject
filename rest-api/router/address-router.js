
var AddressController=require('../controller/admin/address-controller')

module.exports=function(endPoint){

    //@RequestMapping(value="profiles",method=RequestMethod.POST)

    //Mapping for Shipping address
    //get
    endPoint.get("/admin/shipping-address",AddressController.getShippingAddress);
    endPoint.get("/admin/shipping-address/:sid",AddressController.getShippingAddressBySid);
    //endPoint.get("/admin/shipping-address/customer/:cid",AddressController.getShippingAddressByCid);
    //post
    endPoint.post("/admin/shipping-address",AddressController.postShippingAddress);
    //put   
    endPoint.put("/admin/shipping-address/:sid",AddressController.updataShippingAddress);
    //delete
    endPoint.delete("/admin/shipping-address/:sid",AddressController.deleteShippingAddressBySid);
//=========================================================================================================//
    //Mapping for Billing Address
    //get
    endPoint.get("/admin/billing-address",AddressController.getBillingAddress);
    endPoint.get("/admin/billing-address/:bid",AddressController.getBillingAddressByBid);
   // endPoint.get("/admin/billing-address/customer/:cid",AddressController.getBillingAddressByCid);
    //post
    endPoint.post("/admin/billing-address",AddressController.postBillingAddress);
    //put
    endPoint.put("/admin/billing-address/:bid",AddressController.updataBillingAddress);
    //delete
    endPoint.delete("/admin/billing-address/:bid",AddressController.deleteBillingAddressBySid);

    
};
