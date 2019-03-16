
var ProfileController=require('../controller/profile-controller')
module.exports=function(endPoint){

    //Mapping for add profile
    //@RequestMapping(value="profiles",method=RequestMethod.POST)
    endPoint.post("/profiles",ProfileController.uploadProfile);
    endPoint.get("/profiles",ProfileController.showProfiles);
    endPoint.delete("/profiles/:mid",ProfileController.deleteProfileById);
    endPoint.get("/sprofiles",ProfileController.findProfiles);    
    
};
