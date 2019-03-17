var AdEntity=require('../../model/advertisement-entity');
var ImagePath=require('../../config/image-folder-path');

// module.exports.saveAd=(req, res) => {
//     console.log();
//     console.log("printing the Ad: ")
//     var ad=req.body;
//     console.log(ad);

//     console.log();
//     let adPhoto=req.files.photo;
//     console.log("Printing the image!!!!!!!!!!!!!");
//     console.log(adPhoto);

//     console.log();

//     var adEntity=new AdEntity;
//     for (key in ad) {
//         adEntity[key] = ad[key];
//     }

//     //retrieving the image type (png, jpg, etc)
//     var imageType=adPhoto.name.substring(adPhoto.name.length-4);
//     //creating the image name to be saved to the database
//     photoName=ad.adId+"_advertisement"+imageType;
//     //creating the full path that will be saved in the database
//     adEntity.photo=ImagePath.AD_IMAGES+"/"+photoName;

//     //saving the ad and photo:
//     adPhoto.mv(appRoot+"/src/"+ImagePath.AD_IMAGES+"/"+photoName, function(err){
//         if (err) {
//             console.log("ERROR HAS OCCURED WHILE SAVING THE AD IMAGE TO THE DATABASE");
//             console.log(err);
//         } 
//         else {
//             adEntity.save(err=>{
//                 if (err) {
//                     res.status(200).message("error occured while saving the ad to the database.")
//                 } else {
//                     res.status(200).message("ad successfully saved!");
//                 }
//             })
//         }
//     });
// }

module.exports.findById=(req, res) => {
    var adverId=req.params.id;
    

    AdEntity.find({ adId:adverId }, function(err, data){
        if (err){ 
            console.log(err);
        } else {
            res.status(200).json(data[0]);
        }
    });
}


module.exports.findAll=(req,res)=>{
    AdEntity.find({},(err,ads)=>{
        if(err)
            return res.status(500).json('error in looking for all ads');
        else
        res.status(200).json(ads);
    });
}

module.exports.editAd=(req, res) => {
    let adPhoto=req.files;
    var ad = req.body;
    
    

    if(!adPhoto) { //if the photo is NOT being updated
        console.log("no image found!!!!");
        AdEntity.updateOne({adId: ad.adId}, {
            $set: {
                title: ad.title,
                orgPrice: ad.orgPrice,
                discountPrice: ad.discountPrice,
                endDate: ad.endDate,
                startDate: ad.startDate,
                description: ad.description,
                subtitle: ad.subtitle,
                productId: ad.productId
            }
        }, function(err, data) {
            if(err){
                console.log(err);
            }
        });
    }
    else { //if updated the photo
        
        //console.log(adPhoto);
        var imgtext=adPhoto.imageUrl.name.substring(adPhoto.imageUrl.name.length-4);
        var pphotoName=ad.adId+"_advertisement"+imgtext;
        
        //this is just image path which we will save into the database 
        var adverPhoto=ImagePath.AD_IMAGES+"/"+pphotoName;
        adPhoto.imageUrl.mv(appRoot+'/src/'+adverPhoto, function(err, data){
            if(err) {
                console.log(err);
                res.status(500).json({status:"fail",message:"ERROR: Unable to save the advertisement."});
            } else {
                console.log()
                AdEntity.updateOne({adId: ad.adId}, {
                    $set: {
                        title: ad.title,
                        orgPrice: ad.orgPrice,
                        discountPrice: ad.discountPrice,
                        endDate: ad.endDate,
                        startDate: ad.startDate,
                        description: ad.description,
                        subtitle: ad.subtitle,
                        productId: ad.productId,
                        imageUrl: adverPhoto
                    }
                }, function(err) {
                    if (err) {
                        console.log(err);
                        res.status(500).json({status:"fail",message:"ERROR: Unable to edit the vendor profile."});
                    } else {
                        res.status(200).json({status:"success",message:"Vendor Data successfully updated."});
                    }
                });
            }
        });
    }
}