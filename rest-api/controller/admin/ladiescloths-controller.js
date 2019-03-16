fs=require('fs');

var LadiesclothsEntity=require('../../model/ladiescloths-entity')
var ImageFolderPath=require('../../config/image-folder-path')

module.exports.getLadiesclothsProduct=(req,res)=>{
  //var ppid=req.query.pid;
  LadiesclothsEntity.find({},(err,data)=>{
    if(!err){
      
      return res.status(200).json(data);
    }else{
      return res.status(400).send({
        status:"fail",
        message:"not found " 
      });
    }
  });
}

module.exports.save =(req,res)=>{
  
   var ladiescloths = req.body;
  
var ladiesclothsEntity=new LadiesclothsEntity();
let pphoto=req.files.photo;
var imgtxt=pphoto.name.substring(pphoto.name.length-4);
var pphotoName=ladiescloths.pid+" "+imgtxt;
ladiesclothsEntity.imageUrl=pphotoName;

pphoto.mv(appRoot+"/"+ImageFolderPath.LADIES_CLOTHS_IMAGES+"/"+ladiesclothsEntity.imageUrl,function(err){
if(err){
  console.log("err");
  return res.status(500).json({status:"fail",message:"images are not saved"})
}
else{
  ladiesclothsEntity.userid=ladiescloths.userid;
  ladiesclothsEntity.save(err=>{
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




