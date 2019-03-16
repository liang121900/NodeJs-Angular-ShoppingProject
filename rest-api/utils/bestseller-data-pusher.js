var BestSellerEntity=require('../model/bestseller-entity')

module.exports=function(){

    var bestseller1 =new BestSellerEntity();
    bestseller1.pid="100";
    bestseller1.imageUrl="assets/img/product-small/01.jpg ";
    bestseller1.rating="2";
    bestseller1.title="handbag";
    bestseller1.sprice="$300";
    bestseller1.dprice="$500";
    bestseller1.subtitle="GET 35% OFF";
    bestseller1.titlel="Best Seller";
    bestseller1.save(function(err){
        if(!err)
        console.log("save in database");
        else
        console.log("");
    });

    var bestseller2 =new BestSellerEntity();
    bestseller2.pid="200";
    bestseller2.imageUrl="assets/img/product-small/07.jpg ";
    bestseller2.rating="2";
    bestseller2.title="shoes";
    bestseller2.sprice="$200";
    bestseller2.dprice="$230";
    bestseller2.subtitle="GET 35% OFF";
    bestseller2.titlel="Best Seller";
    
    bestseller2.save(function(err){
        if(!err)
        console.log("save in database");
        else
        console.log("");
    });



    var bestseller3 =new BestSellerEntity();
    bestseller3.pid="300";
    bestseller3.imageUrl="assets/img/product-small/09.jpg ";
    bestseller3.rating="2";
    bestseller3.title="Laptop";
    bestseller3.sprice="$450";
    bestseller3.dprice="$520";
    
    bestseller3.save(function(err){
        if(!err)
        console.log("save in database");
        else
        console.log("");
    });

    var bestseller4 =new BestSellerEntity();
    bestseller4.pid="400";
    bestseller4.imageUrl="assets/img/product-small/12.jpg ";
    bestseller4.rating="2";
    bestseller4.title="Bose-headset";
    bestseller4.sprice="$90";
    bestseller4.dprice="$120";
    
    bestseller4.save(function(err){
        if(!err)
        console.log("save in database");
        else
        console.log("");
    });
    
};
