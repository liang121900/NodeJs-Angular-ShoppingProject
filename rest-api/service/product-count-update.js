module.exports.updateTotalSold = (items) => {
    console.log(items);
    //var totalSold = req.body.totalSold;
    ///var updatedProduct = new ProductEntity();
     for(var x=0;items.length;x++){
         var item=items[x];

        ProductEntity.find({pid:item.pid}, (err,data)=>{
            if(err){
               return res.status(404).send({
                  status:"fail",
                  message: "Product not found with pid " + pid
              });
            }
            var updatedProduct = data[0];
            updatedProduct.totalSold = updatedProduct.totalSold + item.quantity;
            updatedProduct.save(err =>{
                  if(err){
                     console.log(err);
                              
                  }else{
                    console.log("@)@)@updated!!!!!!!!!!!!!!!!!");
                  }
               });
         });
    }

 }