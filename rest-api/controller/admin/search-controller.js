fs = require('fs');

var SearchEntity = require('../../model/search-entity')
var ImageFolderPath = require('../../config/image-folder-path')

module.exports.getSearchProduct = (req, res) => {
  //var ppid=req.query.pid;
  SearchEntity.find({}, (err, data) => {
    if (!err) {
      logger.log('debug',"This is inside search controller!!!!!!!!!!!!!!!!!!");
      logger.log('debug', JSON.stringify(data));
      return res.status(200).json(data);
    } else {
      return res.status(400).send({
        status: "fail",
        message: "not found " + ppid
      });
    }
  });
}



module.exports.save = (req, res) => {
  
  var search = req.body;
  
  var searchEntity = new SearchEntity();
  let pphoto = req.files.photo;
  var imgtxt = pphoto.name.substring(pphoto.name.length - 4);
  var pphotoName = search.pid + " " + imgtxt;
  searchEntity.imageUrl = pphotoName;
  
  pphoto.mv(appRoot + "/" + ImageFolderPath.SEARCH_IMAGES + "/" + searchEntity.imageUrl, function (err) {
    if (err) {
      console.log("err");
      return res.status(500).json({ status: "fail", message: "images are not saved" })
    }
    else {
      searchEntity.userid = search.userid;
      searchEntity.save(err => {
        if (err) {
          console.log(err);
          res.status(200).json({ status: "fail", message: "Sorry!!  not able to  save in database" });
        } else {
          res.status(200).json({ status: "success", message: "saved in database" });
        }
      });

    }
  });
}

