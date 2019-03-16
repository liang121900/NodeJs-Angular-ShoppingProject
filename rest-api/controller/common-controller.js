var ImageFolderPath = require('../config/image-folder-path')
module.exports.loadImage=function(req, res) {
        
        var imagePathURL = req.query.imageUrl;
        var imagePath = appRoot  + "/" +  ImageFolderPath.BASE_IMAGE_DB_PATH +"/" + imagePathURL;
        console.log(imagePath);
        fs.readFile(imagePath,(err,data)=>{
           
           if (err){
              console.log(err)
              return res.status(500).json({status:"fail",message:"Sorry!! image not found"});
           }
           res.writeHead(200,{'Content-Type':'image/jpeg'});
           res.end(data);
        });
}  