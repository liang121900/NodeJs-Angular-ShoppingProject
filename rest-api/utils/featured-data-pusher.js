var FeaturedEntity=require('../model/featured-entity')

module.exports=function(){
   
    var featured1 =new FeaturedEntity();
    featured1.pid="100";
    featured1.imageUrl="assets/img/product-small/18.jpg ";
    featured1.rating="2";
    featured1.title="Apple watch";
    featured1.sprice="$400";
    featured1.dprice="$480";
    featured1.subtitle="GET 45% OFF";
    featured1.titles="Featured";
    featured1.save(function(err){
        if(!err)
        console.log("save in database");        
        else
        console.log("");
    });

    var featured2 =new FeaturedEntity();
    featured2.pid="500";
    featured2.imageUrl="assets/img/product-small/17.jpg";
    featured2.rating="7";
    featured2.title="Samsung-TV";
    featured2.sprice="$7000";
    featured2.dprice="$7800";

    featured2.save(function(err){
        
            if(!err)
            console.log("pushed");
            else
            console.log("");
        });
    
        var featured3 =new FeaturedEntity();
        featured3.pid="300";
        featured3.imageUrl="assets/img/product-small/05.jpg";
        featured3.rating="4";
        featured3.title="Slipper";
        featured3.sprice="$80";
        featured3.dprice="$100";
    
        featured3.save(function(err){
            
                if(!err)
                console.log("pushed");
                else
                console.log("");
            });


            var featured4 =new FeaturedEntity();
            featured4.pid="500";
            featured4.imageUrl="assets/img/product-small/02.jpg";
            featured4.rating="3";
            featured4.title="Tshirt";
            featured4.sprice="$50";
            featured4.dprice="$60";
        
            featured4.save(function(err){
                
                    if(!err)
                    console.log("pushed");
                    else
                    console.log("");
                });

         };