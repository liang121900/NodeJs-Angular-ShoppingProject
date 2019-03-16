fs=require('fs');

var BestSellerEntity=require('../../model/bestseller-entity')
var ImageFolderPath=require('../../config/image-folder-path')

module.exports.getBestsellerProduct=(req,res)=>{
 
    BestSellerEntity.find({ },(err,data)=>{
    if(!err){
      
      return res.status(200).json(data);
    }else{
      return res.status(400).send({
        status:"fail",
        message:"not found " +ppid
      });
    }
  });
}

module.exports.getProductRating = (req,res)=>{
  var pid = req.params.pid;
  ReviewEntity.find({pid:pid}, 'rating' ,(err,data)=>{
     var rating = 0;
     if(data.length>0){
        for(var i = 0; i< data.length;i++){
           rating = rating + data[i].rating;
        }
        rating = rating /data.length;
     }

     
     if(err){
        return res.status(404).send({
           status:"fail",
           message: "Product not found with pid " + pid
       });
     }
     return res.status(200).json(rating);
  });
}


module.exports.save =(req,res)=>{
    
     var bestseller = req.body;
    
var bestsellerEntity=new BestSellerEntity();
let pphoto=req.files.photo;
var imgtxt=pphoto.name.substring(pphoto.name.length-4);
var pphotoName=bestseller.pid+" "+imgtxt;
bestsellerEntity.imageUrl=pphotoName;

pphoto.mv(appRoot+"/"+ImageFolderPath.BESTSELLER_IMAGES+"/"+bestsellerEntity.imageUrl,function(err){
  if(err){
    console.log("err");
    return res.status(500).json({status:"fail",message:"images are not saved"})
  }
  else{
    bestsellerEntity.userid=bestseller.userid;
    bestsellerEntity.save(err=>{
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

