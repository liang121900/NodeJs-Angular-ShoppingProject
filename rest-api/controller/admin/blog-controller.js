var IMAGE_FOLDER_PATH = require('../../config/image-folder-path');
var db=require('mongodb');
var fs = require('fs');
var mongoose=require('mongoose');
var BlogEntity=require('../../model/blog-entity')
module.exports.findAllBlogs = (req,res) => {

    BlogEntity.find({},(err,blogs)=>{
        if(err)
            return res.status(500).json(blogs);
        else
            return res.status(200).json(blogs);
    });

}

module.exports.findBlogByBid = (req,res) => {
    let bid=req.param('bid');
    
    BlogEntity.find({bid:bid},(err,blog)=>{
        console.log(blog);
        if(err)
            return res.status(500).json('[]');
        else
            return res.status(200).json(blog[0]);
    });

}


module.exports.addBlog = (req, res) => {
    var blog = req.body; //this is the json object coming from the client. 
    var blogEntity = new BlogEntity();


    let img = req.files.image;
    var imgName = img.name;
    blogEntity.image = "assets/img/blog/" + imgName;

    for (key in blog) {
        blogEntity[key] = blog[key];  
    }

    img.mv(appRoot + "/" + IMAGE_FOLDER_PATH.BLOG_IMAGE + "/" + imgName, function (err) {
        if (err) {
            console.log(err);
            return res.status(500).json({ status: "fail", message: "Sorry! Could Not Save Blog Image." });
        } else {
            blogEntity.save(err => {
                if (err) {
                    console.log(err);
                    res.status(200).json({ status: "fail", message: "couldn't save to database" });

                } else {
                    res.status(200).json({ status: "success", message: "blog sucessfully saved" });
                }
            });
        }
    });
}




module.exports.updateBlog = (req, res) => {
    //if _id provided, update
    let bid=req.param('bid');
    let blog = req.body;
    if(!req.files||!req.files.image){
        return res.status(404).json("rquired image is not provided");
    }

    BlogEntity.findOne({bid:bid}, (err, oldBlog) => {
        if (err) {
            console.log(err);
            res.status(404).json("cannot find the blog");
        }
       
        let oldImgPathArr = oldBlog.image.split('/');
        let oldImageName = oldImgPathArr[oldImgPathArr.length - 1];
        //delete old image
        fs.unlink(appRoot + "/" + IMAGE_FOLDER_PATH.BLOG_IMAGE + "/" + oldImageName, (err) => {
            if (err)
                console.log(err);
        });


     
        for (key in blog) {
            oldBlog[key] = blog[key];  
        }
        
        let img = req.files.image;
        let imgName = img.name;

        //save the image
        img.mv(appRoot + "/" + IMAGE_FOLDER_PATH.BLOG_IMAGE + "/" + imgName, function (err) {
            if (err) {
                console.log(err);
                return res.status(500).json({ status: "fail", message: "Sorry! Could Not Save blog Image." });
            } else {
                oldBlog.image = "assets/img/blog/" + imgName;
                oldBlog.save(err => {
                    if (err) {
                        console.log(err);
                        res.status(500).json("error in updating the blog");
                    }
                    res.status(200).json("success updating blog");
                });
            }
        });

    });

}


module.exports.patchBlog = (req, res) => {
    let bid=req.param('bid');
    let body=req.body;
    console.log(body);
    BlogEntity.findOne({bid:bid}, (err, oldBlog) => {
        if (err) {
            console.log(err);
            res.status(404).json("cannot find the blog");
        }
        for (key in body) {
            oldBlog[key] = body[key];  
        }
        oldBlog.save(err=>{
            if (err) {
                console.log(err);
                res.status(500).json("error in patching blog "+err);
            }else{
                res.status(200).json("update blog success.");
            }
        });
    });
    

}


module.exports.deleteBlog = (req, res) => {



    bid=req.param('bid');
//delete image file
  BlogEntity.findOne({bid:bid}, (err, oldBlog) => {
        if (err) {
            console.log(err);
            res.status(404).json("cannot find the blog");
        }

        let oldImgPathArr = oldBlog.image.split('/');
        let oldImageName = oldImgPathArr[oldImgPathArr.length - 1];
        //delete old image
        fs.unlink(appRoot + "/" + IMAGE_FOLDER_PATH.BLOG_IMAGE + "/" + oldImageName, (err) => {
            if (err)
                console.log(err);
        });
    });
    //delete document
    BlogEntity.deleteOne({bid:bid},(err)=>{
        if(err){
            res.status(500).json("err in deleting blog");
        }
        else{
        res.status(200).json("success");
        }
    });


}