var OfferAddEntity=require('../model/offeradd-entity')

module.exports=function(){

    var offeradd1 =new OfferAddEntity();
    offeradd1.pid="100";
    offeradd1.imageUrl="assets/img/banner-add/bigsale.jpg";
    offeradd1.title="Offer";
    offeradd1.status="yes";
    
    offeradd1.save(function(err){
        if(!err){
        console.log("@@@FROM OFFER DATA PUSHER")
        console.log("save in database");
                 }
        else{
        console.log("not save in db");
            }
    });


    var offeradd2 =new OfferAddEntity();
    offeradd2.pid="200";
    offeradd2.imageUrl="assets/img/banner-add/chrismas.jpeg";
    offeradd2.title="Headset sales";
    offeradd2.status="yes";
    
    offeradd2.save(function(err){
        if(!err){
        console.log("@@@FROM OFFER DATA PUSHER")
        console.log("save in database");
                 }
        else{
        console.log("not save in db");
            }
    });


 

    
}