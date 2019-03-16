var SliderEntity = require('../../model/slider-entity');
var IMAGE_FOLDER_PATH = require('../../config/image-folder-path');
var db=require('mongodb');
var fs = require('fs');
var mongoose=require('mongoose');
module.exports.saveSlider = (req,res) => {
    var slider = req.body; //this is the json object coming from the client. 
    var sliderEntity = new SliderEntity();
    

    let img = req.files.image;
    var imgName = img.name;
    sliderEntity.image = "assets/img/slider/"+imgName;
  
   for(key in slider){
        sliderEntity[key] = slider[key];  //Each key from json object is initializing sliderEntity.
    }
    //the new slider is not selected in default
    sliderEntity.selected='false';

        //var imgExt = img.name.substr(img.name.length-4);

        img.mv(appRoot + "/" + IMAGE_FOLDER_PATH.SLIDER_IMAGES + "/" + imgName, function (err) {
            if (err) {
                console.log(err);
                return res.status(500).json({ status: "fail", message: "Sorry! Could Not Save Slider Image." });
            } else {
                sliderEntity.save(err => {
                    if (err) {
                        console.log(err);
                        res.status(200).json({ status: "fail", message: "couldn't save to database" });

                    } else {
                        res.status(200).json({ status: "success", message: "vendor sucessfully saved" });
                    }
                });
            }
        });
    }



module.exports.findSlider = (req,res) => {
    
    SliderEntity.find({}).sort('-doe').exec(function(err, data) {
        
          res.status(200).json(data);
    }) ;
}


module.exports.patchSlider=(req,res)=>{
    var body=req.body;
    //if no _id provided, return error
    if(!req.query._id){
        console.log("cannot find slider _id in patchslider")
        res.status(200).json("cannot find slider _id in patchslider");
        return;
    }
    //if selected properties of slider is provided, update 
    if (body.selected) {
        //set isSelected of all slider to be false, then set the isSelected of selected slider to be true
        SliderEntity.updateMany({}, { selected: 'false' }, (err, data) => {
            if (err) {
                console.log("error in patching slider in slider-controller: " + err);
                res.status(200).json("error in patching slider in slider-controller: ");
            } else {
                SliderEntity.updateOne({ _id: req.query._id }, { selected: 'true' }, (err, data) => {
                    if (err) {
                        res.status(200).json("cannot update isSelected true for selected slider error in patching slider in slider-controller: " + err);

                    } else {
                        res.status(200).json("success patching isSelected of slider");

                    }
                });
            }
        });
    }
}


module.exports.updateSlider = (req, res) => {
    //if _id provided, update
    let slider = req.body;
    if(!req.files||!req.files.image){
        return res.status(404).json("rquired image is not provided");
    }

    //find the old slider
    SliderEntity.findById(mongoose.Types.ObjectId(slider._id), (err, oldSlider) => {
        if (err) {
            console.log(err);
            res.status(404).json("cannot find the slider");
        }

        let oldImgPathArr = oldSlider.image.split('/');
        let oldImageName = oldImgPathArr[oldImgPathArr.length - 1];
        //delete old image
        fs.unlink(appRoot + "/" + IMAGE_FOLDER_PATH.SLIDER_IMAGES + "/" + oldImageName, (err) => {
            if (err)
                console.log(err);
        });


        //update the slider
        for (key in slider) {
            oldSlider[key] = slider[key];  //Each key from json object is initializing sliderEntity.
        }
        
        let img = req.files.image;
        let imgName = img.name;

        //save the image
        img.mv(appRoot + "/" + IMAGE_FOLDER_PATH.SLIDER_IMAGES + "/" + imgName, function (err) {
            if (err) {
                console.log(err);
                return res.status(500).json({ status: "fail", message: "Sorry! Could Not Save Slider Image." });
            } else {
                oldSlider.image = "assets/img/slider/" + imgName;
                oldSlider.save(err => {
                    if (err) {
                        console.log(err);
                        res.status(500).json("error in updating the slider");
                    }
                    res.status(200).json("success updating slider");
                });
            }
        });

    });

}
