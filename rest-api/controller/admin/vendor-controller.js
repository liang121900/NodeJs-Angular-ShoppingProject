//Sending email here
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const nodemailer = require('nodemailer'),
    //creds = require('./creds'),
    transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sgisticit@gmail.com',
            pass: '$yn3rg1s',
        },
    }),
    EmailTemplate = require('email-templates').EmailTemplate,
    path = require('path'),
    Promise = require('bluebird');


fs = require('fs');


var VendorEntity=require('../../model/vendor-entity')
var ImageFolderPath=require('../../config/image-folder-path')
var AppConfig=require('../../config/app.config')

var VendorMail=require('../../service/vendor-mail');

module.exports.findVendorByVcode=(req, res) => {
   id=req.params.vcode;
   VendorEntity.find({vcode:id}, function(err, data) {
      
      
      res.status(200).json(data);
   });
}

module.exports.findProfilePic=(req,res)=> {
   //var _id=req.query.id;
   var pvcode=req.params.vcode;
   
   if(pvcode==undefined){
       return;
   }
   VendorEntity.find({vcode:pvcode},function(err,data){
     console.log(err)
     if (err) 
     throw err;
      if(data.length==1){
        var imagePath=data[0].photo;
        var cimagePath=appRoot +"/"+imagePath;
        fs.readFile(cimagePath, function(err, data) {
           console.log(err)
           if (err) throw err; // Fail if the file can't be read.
             res.writeHead(200, {'Content-Type': 'image/jpeg'});
             res.end(data); // Send the file data to the browser.
         });
      }else{
        //res.end([]);
        res.end('');
      }
  });
   //Reading image from file system
  
 }


 module.exports.findVendors=(req,res)=> {
   
   VendorEntity.find({},function(err,data){
          
          res.status(200).json(data);
   });

}

module.exports.saveVendor =(req,res)=>{
   
   //console.log(req);
   var vendor = req.body;
   
   //reading the image coming from client as a request
   let pphoto = req.files.photo;
   
    // name of the image
  // console.log(pphoto.data); //image as a byte array
  
   
   var vendorEntity = new VendorEntity();
   for (key in vendor) {
      vendorEntity[key] = vendor[key]; // copies each property to the vendorEntity object
   }
   vendorEntity.userid=vendor.userid;
   //saving image location into the database!
   var imgext=pphoto.name.substring(pphoto.name.length-4);
   var pphotoName=vendor.vcode+"_profile"+imgext;
   //this is just image path which we will save into the database
   vendorEntity.photo=ImageFolderPath.VENDOR_PROFILES+"/"+pphotoName;
   //----------------------------------------------------------------------------------------------------//
   //saving file on server file system
   pphoto.mv(appRoot +"/"+ImageFolderPath.VENDOR_PROFILES+"/"+pphotoName, function(err) {
         if(err){
            console.log(err);  
            res.status(500).json({status:"fail",message:"Sorry!! vendor profile image is not save"}); 
         }else{
            vendorEntity.save(err =>{
               if(err){
                  console.log(err);
                  return res.status(200).json({status:"fail",message:"couldn't save to database"});
               }else{
                  let cdata = [
                     {
                         vendorName: vendor.name,
                         email: vendor.email,
                         vendorId: vendor.vcode,
                         cemail: AppConfig.cemail,
                         companyName: AppConfig.cname,
                     }, {
                        vendorName: vendor.name,
                        email: vendor.email,
                        vendorId: vendor.vcode,
                        cemail: AppConfig.cemail,
                        companyName: AppConfig.cname,
                    }];
                  
                  
                 
                  //Code to send email
                  loadTemplate('vendor', cdata).then((results) => {
                     return Promise.all(results.map((result) => {
                         sendEmail({
                             to: result.context.email,
                             from: 'Shopping Cart!!!!!!!!',
                             subject: result.email.subject,
                             html: result.email.html,
                             text: result.email.text,
                         });
                     }));
                  });
                  
                 
                  //VendorMail.sendEmail(cdata);
                  return res.status(200).json({status:"success",message:"vendor sucessfully saved"})
               }
            }); //end of save entity
         }
         
   }); //end of mv method

}

/*
module.exports.saveVendor =(req,res)=>{
   var vendor = req.body;
   var vendorEntity = new VendorEntity();
   for (key in vendor) {
      vendorEntity[key] = vendor[key]; // copies each property to the vendorEntity object
   }
   vendorEntity.userid=vendor.userid;

   vendorEntity.save(err =>{
      if(err){
         return res.status(200).json({status:"fail",message:"couldn't save to database"});
      }else{
         return res.status(200).json({status:"success",message:"vendor sucessfully saved"})
      }
   })

}
*/



  // uriMapping.delete("/vendors/{mid}",VendorController.deleteVendorById);
  module.exports.deleteVendorById=function(req,res){
   // var _id=req.query.sno;
    //req.params.noteId
    console.log("_@)@)@)@)@)DELETING THE VENDOR WITH PROFILE ID  ="+req.query.id+" @)@)@)@)@)@)@)@)");
    VendorEntity.findByIdAndRemove(req.params.mid)
                 .then(vendor => {
                     if(!vendor) {
                         return res.status(404).send({
                             status:"fail",
                             message: "Profile not found with id " + req.query.sno
                         });
                     }
                     res.status(200).send({ status:"success",message: "Vendor deleted successfully!"});
                 }).catch(err => {
                     if(err.kind&&(err.kind === 'ObjectId' || err.name === 'NotFound')) {
                         return res.status(404).send({
                             status:"fail",
                             message: "Vendor not found with id " + req.query.sno
                         });                
                     }
                     return res.status(500).send({
                         status:"fail",
                         message: "Could not delete vendor with id " + req.query.sno
                     });
                  });
}


module.exports.editVendorById =(req,res)=>{
   var vendor = req.body;
   var vendorEntity = new VendorEntity();

   /*
   for (key in vendor) {
      vendorEntity[key] = vendor[key]; // copies each property to the vendorEntity object
   }
   vendorEntity.userid=vendor.userid;
   */

   
   // is not a function error
   // vendorEntity.findByIdAndUpdate(        
   
   VendorEntity.findByIdAndUpdate( 
      // the id of the item to find
      req.params.mid, 

      { $set: { 	vcode:vendor.vcode, 
                  name:vendor.name,
                  email:vendor.email,
                  mobile:vendor.mobile,
                  address:vendor.address,
                  photo:vendor.photo,
                  comment:vendor.comment
      } },
      
      // an option that asks mongoose to return the updated version 
      // of the document instead of the pre-updated one.
      {new: true},
      
      // the callback function
      (err, todo) => {
      // Handle any possible database errors
         if (err){ 
            
                 console.log(err);
                 res.status(200).json({status:"fail",message:"Sorry!! your vendor is not updated"}); 				
         }
         else{
                 res.status(200).json({status:"success",message:"Hey! your vendor is edited successfully!"}); 
              }
          
      }
   );

}


function sendEmail (obj) {
   return transporter.sendMail(obj);
}

function loadTemplate (templateName, contexts) {
   
   
   
   let template = new EmailTemplate(path.join(appRoot, 'templates', templateName));
   return Promise.all(contexts.map((context) => {
       return new Promise((resolve, reject) => {
           template.render(context, (err, result) => {
               if (err) reject(err);
               else resolve({
                   email: result,
                   context,
               });
           });
       });
   }));
}



