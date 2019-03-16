fs=require('fs');

var OfferAddEntity=require('../../model/offeradd-entity')
var ImageFolderPath=require('../../config/image-folder-path')

module.exports.save =(req,res)=>{
  
   var offeradd = req.body;
  
var offerAddEntity=new OfferAddEntity();
let pphoto=req.files.photo;
var imgtxt=pphoto.name.substring(pphoto.name.length-5);
var pphotoName=offerAddEntity.pid+" "+imgtxt;
offerAddEntity.imageUrl=pphotoName;

pphoto.mv(appRoot+"/"+ImageFolderPath.OFFERADD_IMAGES+"/"+offerAddEntity.imageUrl,function(err){
if(err){
  console.log("err");
  return res.status(500).json({status:"fail",message:"images are not saved"})
}
else{
    offerAddEntity.userid=offeradd.userid;
    offerAddEntity.save(err=>{
    if(err){
        console.log(err);
        res.status(200).json({status:"fail",message:"Sorry!!  not able to  save in database"}); 
    }else{
       res.status(200).json({status:"success",message:"saved in database"}); 
    }
});

}
    });
  }

  module.exports.getOfferAdd=(req,res)=>{
  
    OfferAddEntity.find({},function(err,data){
      if(!err){
        
        return res.status(200).json(data);
      }else{
        res.status(400).send({
          status:"fail",
          message:"not found"
        })
      }
    });


  }