

var LadiesclothsController=require('../controller/admin/ladiescloths-controller')
module.exports=function(endPoint){
endPoint.get("/admin/ladiescloths",LadiesclothsController.getLadiesclothsProduct);
};