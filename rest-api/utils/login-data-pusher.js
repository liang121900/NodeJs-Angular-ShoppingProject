var LoginEntity=require('../model/login-entity')

module.exports=function(){
    var login1 =new LoginEntity();
    login1.username="rahul";
    login1.password="test@123";
    login1.role="user";
    login1.status="active";
    login1.save(function(err){
        if(!err)
        console.log("Login is created!!!!!!!!!!!!!!!!!!!!!!!");
        else
        console.log("User is there!!!!!!!!!!");
    });

    var login2 =new LoginEntity();
    login2.username="rober";
    login2.password="test@123";
    login2.role="user";
    login2.status="active";
    login2.save(function(err){
        if(!err)
        console.log("Login is created!!!!!!!!!!!!!!!!!!!!!!!");
        else
        console.log("User is there!!!!!!!!!!");
    });
};