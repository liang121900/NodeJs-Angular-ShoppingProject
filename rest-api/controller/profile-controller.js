
var ProfileEntity=require('../model/profile-entity')
var randomstring = require("randomstring");
module.exports.uploadProfile=function(req, res) {

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let pphoto = req.files.photo;
    
     //image as a byte array
    var fileName=pphoto.name; // name of the image to be uploaded
  
    // Use the mv() method to place the file somewhere on your server
    pphoto.mv(__dirname+"/images/"+fileName, function(err) {
      if (err){
        console.log(err);
        res.status(500).json({status:"fail",message:"Sorry!! your profile is not created"}); 
      }else{   
    
      var profile=req.body;
     
       
     //This is instance mongoose schema
     var pentity =new ProfileEntity();
     pentity.name=profile.name;
     pentity.username=profile.name;
     pentity.password="test@123";
     pentity.email=profile.email;
     pentity.gender=profile.gender;
     pentity.mobile=profile.mobile;
     //pentity.photo=profile.photo;
     var  pid=randomstring.generate(7);
     pentity.pid=pid;
     pentity.photo.data = pphoto.data;
     pentity.photo.contentType = 'image/png';
            pentity.save(function(err){
                
                
                if(err){
                    
                    console.log(err);
                    res.status(200).json({status:"fail",message:"Sorry!! your profile is not created"}); 
                }else{
                    
                    res.status(200).json({status:"success",message:"Hey! your profile is uploaded successfully!"}); 
                 }
            });   
          }
    });
  }


 module.exports.showProfiles=(req,res)=> {
   //var students = [];    
   ProfileEntity.find({},function(err,data){
          console.log(data);
          res.status(200).json(data);
   });   
}

module.exports.findProfiles=(req,res)=> {
   
    var sstring=req.query.search;
    //var students = [];    
    ProfileEntity.find({
        $or: [
          { 'name': { $regex: '.*' + sstring + '.*' }},
          { 'email': { $regex: '.*' + sstring + '.*' }}
        ]
      }, function(err, data) {
         console.log(err); 
         if(!err) {
            console.log("No of records found = "+data.length); 
            console.log(data); 
            res.status(200).json(data);
         }
         
      });
}






  // uriMapping.delete("/profiles/{mid}",ProfileController.deleteProfileById);
  module.exports.deleteProfileById=function(req,res){
      // var _id=req.query.sno;
       //req.params.noteId
       ProfileEntity.findByIdAndRemove(req.params.mid)
                    .then(profile => {
                        if(!profile) {
                            return res.status(404).send({
                                status:"fail",
                                message: "Profile not found with id " + req.query.sno
                            });
                        }
                        res.status(200).send({ status:"success",message: "Profile deleted successfully!"});
                    }).catch(err => {
                        if(err.kind&&(err.kind === 'ObjectId' || err.name === 'NotFound')) {
                            return res.status(404).send({
                                status:"fail",
                                message: "Profile not found with id " + req.query.sno
                            });                
                        }
                        return res.status(500).send({
                            status:"fail",
                            message: "Could not delete profile with id " + req.query.sno
                        });
                     });
}