var CommonnController=require('../controller/common-controller')
module.exports=function(endPoint){

    endPoint.get("/load-image",CommonnController.loadImage);
    
}