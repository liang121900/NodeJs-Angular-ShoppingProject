var jwt  = require('jsonwebtoken'); // used to create, sign, and verify tokens
var ProfileEntity=require('../model/profile-entity')
var LoginEntity=require('../model/login-entity')
var RESTAPI=require('../config/rest-api-constant');
// var ImageFolderPath=require('../../config/image-folder-path')

//Here we have to write logic to generate token using jsonwebtoken module!
module.exports.authUser=(req,res)=> {
    //var login={username:"jack",password:"jill"};
    var data=req.body; 
    var pusername=data.username;
    var ppassword=data.password;

    LoginEntity.find({username:pusername,password:ppassword})
   .then(profile => {
       //profile=[];
       if(profile.length>0) {
    
		//Here we have to write code to generate the token
		  const payload = {username: pusername};
          //var SALT ='IhateCat&Olive';
          var token = jwt.sign(payload, RESTAPI.TOKEN_SALT,{				
              expiresIn: 60*60*24 // expires in 24 hours
              //expiresIn:30				      
          });
          
           return res.status(200).send({role:profile[0].role,authToken:token,status:"success",message:"username and password are correct!."});
       }else{
            console.log(err);
            return res.status(200).send({status:"fail",message:"username and password are not correct!."});
       }
   }).catch(err => {
       console.log(err);
       return res.status(500).send({status:"fail",message:"Sorry! there is some problem to process the request."});
   });

}


   //Here we are passing data as query string
   //?sno=re3030303
   module.exports.findImageById=function(req,res){
    //var _id=req.query.id;
    var _id=req.params.mid;
    
    if(_id==undefined){
        return;
    }

    ProfileEntity.findById(_id)
        .then(profile => {
            if(profile) {
                //what you are writting into the response
                res.contentType(profile.photo.contentType);
                //here in response we are writting only
               return res.send(profile.photo.data);          
            }
        }).catch(err => {
            console.log(err);
            //if(err.kind === 'ObjectId') {
              //  return res.status(404).send({});                
           // }
            return res.status(500).send({ });
        });
}

module.exports.authGoogleUser=(req,res)=> {
    var data = req.body;
    var loginEntity = new LoginEntity();
    loginEntity.username=data.email;
    loginEntity.role="user";
    loginEntity.status="active";
    // let pphoto = data.picture;

    // //saving image location into the database!
    // var imgext=pphoto.substring(pphoto.length-4);
    // var pphotoName=loginEntity.username+"_profile"+imgext;
    // console.log(pphotoName);
    // //this is just image path which we will save into the database
    // loginEntity.photo=ImageFolderPath.VENDOR_PROFILES+"/"+pphotoName;
    // //----------------------------------------------------------------------------------------------------//
    // //saving file on server file system
    // pphoto.mv(appRoot +"/"+ImageFolderPath.VENDOR_PROFILES+"/"+pphotoName);
    loginEntity.save(function(err){
        if(err){
            console.log(err);
            return res.status(200).json({status:"fail",message:"couldn't save to database"});
         }else{
            return res.status(200).json({status:"success",message:"user sucessfully saved"})
         }
    });
}

module.exports.getAllUsers = (req,res) =>{
   LoginEntity.find({},function(err,data){
          console.log(data);
          return res.status(200).json(data);
   });
}

module.exports.findUsersByUsername=(req, res) => {
    var name=req.query.username;
    //query is the ?username= in the googleLoginService

    LoginEntity.find({ username:name }, function(err, data){
        if (err){ 
            console.log(err);
        } else {
            res.status(200).json(data[0]);
        }
    });
}
module.exports.blockUser=(req, res) => {
    var name=req.query.username;
    //query is the ?username= in the googleLoginService

    LoginEntity.updateOne({username: name}, {
        $set: {
            status: "blocked"
        }
    }, function(err, data) {
        if(err){
            console.log(err);
        }
    });
}
module.exports.unblockUser=(req, res) => {
    var name=req.query.username;
    //query is the ?username= in the googleLoginService
    

    LoginEntity.updateOne({username: name}, {
        $set: {
            status: "inactive"
        }
    }, function(err, data) {
        if(err){
            console.log(err);
        }
    });
}
module.exports.editUser=(req, res) => {
    var name=req.query.username;
    //query is the ?username= in the googleLoginService
    

    LoginEntity.updateOne({username: name}, {
        $set: {
            status: "inactive"
        }
    }, function(err, data) {
        if(err){
            console.log(err);
        }
    });
}
module.exports.deleteUser=(req, res) => {
    var name=req.query.username;
    //query is the ?username= in the googleLoginService
    
    LoginEntity.deleteOne({username: name},err =>{
        if(err){
            res.status(200).json({status:"failed",message:"ERROR: Could not delete"});
        }else{
            res.status(200).json({status:"success",message:"User was deleted successfully"});
        }
    });
}