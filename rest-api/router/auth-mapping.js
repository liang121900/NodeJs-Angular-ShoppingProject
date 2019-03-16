
var AuthController=require('../controller/auth-controller')
module.exports=function(app){
    app.post("/login",AuthController.authUser); 
    app.get("/profiles/image/:mid",AuthController.findImageById);
    app.post("/googlelogin", AuthController.authGoogleUser);
    app.get("/users", AuthController.findUsersByUsername);
    app.get("/allUsers", AuthController.getAllUsers);
    app.put("/blockUser", AuthController.blockUser);
    app.put("/unblockUser", AuthController.unblockUser);
    app.put("/editUser", AuthController.editUser);
    app.delete("/deleteUser", AuthController.deleteUser);
};
