
var VendorController=require('../controller/admin/vendor-controller')
module.exports=function(endPoint){

    //Mapping for add profile
    //@RequestMapping(value="profiles",method=RequestMethod.POST)
    endPoint.get("/admin/vendors",VendorController.findVendors);
    endPoint.post("/admin/vendors",VendorController.saveVendor);

    ///admin/vendors/image/V9000
    //:vcode = is called passing as a part of URI
    endPoint.get("/admin/vendors/image/:vcode",VendorController.findProfilePic);

    // uriMapping.delete("/vendors/{mid}",VendorController.deleteVendorById);
    endPoint.delete("/admin/vendors/:mid",VendorController.deleteVendorById);

    // uriMapping.put("/vendors/{mid}",VendorController.editVendor);
    endPoint.put("/admin/vendors/:mid",VendorController.editVendorById);
	
	endPoint.get("/admin/vendors/vcode/:vcode",VendorController.findVendorByVcode);
    
};
