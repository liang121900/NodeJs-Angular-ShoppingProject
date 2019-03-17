fs = require('fs')
var ProductEntity=require('../../model/product-entity')
//var CustomerEntity=require('../../model/customer-entity')
var SaveLaterEntity=require('../../model/savelater-entity')
var WishListEntity=require('../../model/wishlist-entity')
var ImageFolderPath = require('../../config/image-folder-path')
var randomstring = require("randomstring");
var LoginEntity=require('../../model/login-entity');
var CartEntity=require('../../model/customers/customer-cart-entity');
var mongoose=require('mongoose');
 module.exports.findProducts=(req,res)=> {
   
   ProductEntity.find({},function(err,data){
          
          res.status(200).json(data);
   });

}

module.exports.findProductsByIds=(req,res)=> {
   var productIds = req.body.pids;

   
   

   var arrayPIDs = productIds.split(',');

   
   

   /*
         $in: [   
          '5bff6a1f56ffe310f8240b2a',
          '5bfc5d405f32c61bf86070e1'   
         ]          
   */

   ProductEntity.find({
      '_id': { 
         
         $in: arrayPIDs
         
      }
   }, function(err, data){
      if(err){
         //logger.log('error', err);
         res.status(200).json("Failure: " + err);
      }
      
      res.status(200).json(data);
   });
}


module.exports.getImage = (req,res) =>{
   
   var url = req.params.imageUrl;
   var imagePath = appRoot  + "/" +  ImageFolderPath.PRODUCTS_IMAGES +"/" + url;
   fs.readFile(imagePath,(err,data)=>{
      
      if (err){
         console.log(err)
         return res.status(500).json({status:"fail",message:"Sorry!! image not found"});
      }
      res.writeHead(200,{'Content-Type':'image/jpeg'});
      res.end(data);
   });
}


module.exports.findSaveForLaterLists=(req,res)=> {
   
   SaveLaterEntity.find({},function(err,data){
          
          res.status(200).json(data);
   });

}

module.exports.editSaveLaterList = (req,res)=>{

   var saveLater = req.body;

   
      

   var saveLaterEntity = new SaveLaterEntity();

   var newProducts = req.body.products;

   for (key in saveLater){
      saveLaterEntity[key] = saveLater[key];
   }   

   
   

   
   

   SaveLaterEntity.findOneAndUpdate(
      
      saveLater.cid, 

      { $set: { 
                  products : newProducts
      }}
      ,

      {new: true},
      
      (err,data)=>{

         if(err){
            return res.status(200).send({
               status:"fail",
               message: "EditSaveForLater List failed! " + err 
         });
         }

      return res.status(200).json(data);
   });
}

module.exports.getSaveLaterList = (req,res)=>{
   var cid = req.params.cid;
   
   
   SaveLaterEntity.find({cid:cid}, (err,data)=>{
      if(err){
         return res.status(404).send({
            status:"fail",
            message: "SaveForLater List not found with sid " + sid
        });
      }

      return res.status(200).json(data);
   });
}

module.exports.postSaveLater =(req,res)=>{
   var saveLater = req.body;
   var saveLaterEntity = new SaveLaterEntity();

   for (key in saveLater){
      saveLaterEntity[key] = saveLater[key];
   }

   saveLaterEntity['sid'] = randomstring.generate(7);

   

    saveLaterEntity.save(err =>{
        if(err){
            console.log(err);
            return res.status(200).json({status:"fail",message:"couldn't save save for later to database"});
        }else{
            return res.status(200).json({status:"success",message:"save for later sucessfully saved"})
        }
    });

}

/********************* WISH LIST *******************************/

module.exports.findWishLists=(req,res)=> {
   
   WishListEntity.find({},function(err,data){
          
          res.status(200).json(data);
   });

}

module.exports.editWishList = (req,res)=>{

   var wishList = req.body;

   var wishListEntity = new WishListEntity();

   var newProducts = req.body.products;

   for (key in wishList){
      wishListEntity[key] = wishList[key];
   }   

   WishListEntity.findOneAndUpdate(
      
      wishList.cid, 

      { $set: { 
                  products : newProducts
      }}
      ,

      {new: true},
      
      (err,data)=>{

         if(err){
            return res.status(200).send({
               status:"fail",
               message: "EditWishList List failed! " + err 
         });
         }

      return res.status(200).json(data);
   });
}

module.exports.postWishList =(req,res)=>{
   var wishList = req.body;
   var wishListEntity = new WishListEntity();

   for (key in wishList){
      wishListEntity[key] = wishList[key];
   }

    wishListEntity.save(err =>{
        if(err){
            console.log(err);
            return res.status(200).json({status:"fail",message:"couldn't save wishlist to database"});
        }else{
            return res.status(200).json({status:"success",message:"wishlist sucessfully saved"})
        }
    });

}

module.exports.getWishList = (req,res)=>{
   var cid = req.params.cid;
   WishListEntity.find({cid:cid}, (err,data)=>{
      if(err){
         return res.status(404).send({
            status:"fail",
            message: "WishList not found with cid " + cid
        });
      }

      return res.status(200).json(data);
   });
}


module.exports.getProduct = (req,res)=>{
   var pid = req.params.pid;
   ProductEntity.find({pid:pid}, (err,data)=>{
      if(err){
         return res.status(404).send({
            status:"fail",
            message: "Product not found with pid " + pid
        });
      }

      return res.status(200).json(data);
   });
}



//Terry*********Update Cart ***********/
module.exports.updateCart=(req,res)=>{
   let userName=req.params.userName;
   let prodArray=req.body;
   //prepare the array of products to be saved in db
   let ppArray=[];
   if(prodArray&&prodArray.length>0){
   prodArray.forEach(product=>{
      ppArray.push(JSON.stringify(product));
   });
}
   //look for the cart for this username, if cart records exist, update, otherwise create one 
   CartEntity.findOne({username:userName},(err,cart)=>{
      if(err)
         return res.status(500).json("server error in looking for cart for the user name "+err);
    
      if(cart){
         cart.products=ppArray;
         //cart.markModified('products');
         cart.save(err=>{
            if(err){
               console.log(err);
               return res.status(500).json("server error in updating cart "+err);
            }
            return res.status(200).json();
         });
         
      }else{
         let cartEntity = new CartEntity();
         cartEntity.username = userName;

         cartEntity.products = ppArray;
         //console.log(cartEntity);
         cartEntity.save(err => {
            if (err) {
               console.log(err);
               return res.status(500).json("server error in saving cart " + err);
            }
         });
      }

   });
   

}

module.exports.getCart=(req,res)=>{
   let userName=req.params.userName;
   if(userName){
      CartEntity.findOne({username:userName},(err,cart)=>{
         if(err){
            return res.status(500).json("server error in looking for cart" + err);
         }
         else if(cart){
            let products=[];
            cart.products.forEach(prod=>{
               products.push(JSON.parse(prod));
            });
            return res.status(200).json(products);
         }
         else{
            return res.status(200).json("");
         }
      });
   }else{
   return res.status(404).json("cart not found");
   }

}

//return the products of the cart 
module.exports.getCartByCartId=(req,res)=>{
   let cartId=req.params.cartId;

   if(cartId){
      CartEntity.findById(mongoose.Types.ObjectId(cartId),(err,cart)=>{
         if(err)
            return res.status(500).json(err);

         let products=[];
         if(cart){
            cart.products.forEach(prod=>{
               products.push(JSON.parse(prod));
            });
         }
         return res.status(200).json(products);
      });

   }else
      return res.status(404).json('not found');

}


//clear the cart by email(username)
module.exports.clearCartByEmail=(req,res)=>{
   let userName=req.params.userName;
   if(userName){
      //look for the cart for this username, if cart records exist, update, otherwise create one 
      CartEntity.findOne({username:userName},(err,cart)=>{
         if(err)
            return res.status(500).json("server error in looking for cart for the user name "+err);
       
         if(cart){
            cart.products=[];
            //cart.markModified('products');
            cart.save(err=>{
               if(err){
                  console.log(err);
                  return res.status(500).json("server error in clearing cart "+err);
               }
               else
                  return res.status(200).json();
            });
            
         }else{
            return res.status(404).json("cart not found by username");
         }
   
      });
   }
}