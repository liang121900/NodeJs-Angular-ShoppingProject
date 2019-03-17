var AdController=require('../controller/admin/ad-controller');
module.exports=function(app){
    //app.post("/advertisement",AdController.saveAd); 
    app.get("/admin/advertisement/:id",AdController.findById);
    app.get("/admin/advertisement",AdController.findAll);
    app.post("/admin/advertisement",AdController.editAd); 
};