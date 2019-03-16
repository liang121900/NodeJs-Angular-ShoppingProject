var SearchEntity=require('../model/search-entity')

module.exports=function(){

    var search1 =new SearchEntity();
    search1.pid="100";
    search1.imageUrl="assets/img/new-collections/05.jpg ";
    search1.category="Bag"
    search1.title="handbag";
    search1.sprice="$300";
    search1.dprice="$340";
 
    search1.save(function(err){
        if(!err)
        console.log("save in search details in database");
        else
        console.log("");
    });

    var search2 =new SearchEntity();
    search2.pid="200";
    search2.imageUrl="assets/img/new-collections/01.jpg";
    search2.category="Dress"
    search2.title="Jacket";
    search2.sprice="$70";
    search2.dprice="$100";
 
    search2.save(function(err){
        if(!err)
        console.log("save search details in database");
        else
        console.log("");
    });

    var search3 =new SearchEntity();
    search3.pid="300";
    search3.imageUrl="assets/img/new-collections/02.jpg";
    search3.category="Shoe"
    search3.title="Footwear Dark";
    search3.sprice="$60";
    search3.dprice="$90";
 
    search3.save(function(err){
        if(!err)
        console.log("save search details in database");
        else
        console.log("");
    });

    var search4 =new SearchEntity();
    search4.pid="400";
    search4.imageUrl="assets/img/new-collections/08.jpg";
    search4.category="watch"
    search4.title="Apple Watch";
    search4.sprice="$360";
    search4.dprice="$390";
 
    search4.save(function(err){
        if(!err)
        console.log("save search details in database");
        else
        console.log("");
    });

    var search5 =new SearchEntity();
    search5.pid="500";
    search5.imageUrl="assets/img/new-collections/12.jpg";
    search5.category="Electronics item"
    search5.title="Mobile";
    search5.sprice="$460";
    search5.dprice="$520";
 
    search5.save(function(err){
        if(!err)
        console.log("save search details in database");
        else
        console.log("");
    });


    var search6 =new SearchEntity();
    search6.pid="600";
    search6.imageUrl="assets/img/new-collections/04.jpg";
    search6.category="Cloths"
    search6.title="Tshirt";
    search6.sprice="$50";
    search6.dprice="$70";
 
    search6.save(function(err){
        if(!err)
        console.log("save search details in database");
        else
        console.log("");
    });

    var search7 =new SearchEntity();
    search7.pid="700";
    search7.imageUrl="assets/img/new-collections/06.jpg";
    search7.category="Shoe"
    search7.title="HoverBoard";
    search7.sprice="$150";
    search7.dprice="$200";
 
    search7.save(function(err){
        if(!err)
        console.log("save search details in database");
        else
        console.log("");
    });

    var search8 =new SearchEntity();
    search8.pid="800";
    search8.imageUrl="assets/img/new-collections/11.jpg";
    search8.category="Mobile"
    search8.title="iPhone";
    search8.sprice="$1500";
    search8.dprice="$2000";
 
    search8.save(function(err){
        if(!err)
        console.log("save search details in database");
        else
        console.log("");
    });


    var search9 =new SearchEntity();
    search9.pid="900";
    search9.imageUrl="assets/img/new-collections/09.jpg";
    search9.category="Electronics"
    search9.title="Speaker";
    search9.sprice="$400";
    search9.dprice="$450";
 
    search9.save(function(err){
        if(!err)
        console.log("save search details in database");
        else
        console.log("");
    });

}