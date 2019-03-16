var AdEntity=require('../model/advertisement-entity')
/*
adId: { type: String,required: true, unique: true },
title: { type: String},
orgPrice: { type: String},
discountPrice: { type: String},
endDate: { type: Date},
startDate: { type: Date },
description: { type: String},
imageUrl: { type: String },
subtitle: {type: String},
productId: {type: String},
*/
module.exports=function(){
    var ad1 =new AdEntity();
    ad1.adId="A123";
    ad1.title="JBL Speakers";
    ad1.orgPrice="0";
    ad1.discountPrice="0";
    ad1.endDate=new Date(2020, 0, 0, 0, 0, 0, 0);
    ad1.description="Stock up on limited edition speakers on our awesome mid-season sale.";
    ad1.imageUrl="assets/img/advertisement/jbp-speaker.png";
    ad1.subtitle="get 50% offer";
    ad1.productId="none";
    ad1.save(function(err){
        if(!err)
        console.log("Advertisement 123 has been created!");
        else
        console.log("Ad 123 is already there!");
    });

    var ad2 =new AdEntity();
    ad2.adId="A200";
    ad2.title="Game Console Controller + USB 3.0 Cable";
    ad2.orgPrice="$400";
    ad2.discountPrice="$520";
    ad2.endDate=new Date(2018, 12, 10);
    ad2.description="";
    ad2.imageUrl="assets/img/advertisement/01.jpg";
    ad2.subtitle="Hurry Up! Offer ends in:";
    ad2.productId="none";
    ad2.save(function(err){
        if(!err)
        console.log("Advertisement 200 has been created!");
        else
        console.log("Ad 200 is already there!");
    });

    var ad3 =new AdEntity();
    ad3.adId="A250";
    ad3.title="";
    ad3.orgPrice="";
    ad3.discountPrice="";
    ad3.endDate=new Date(2020,0,0);
    ad3.description="";
    ad3.imageUrl="assets/img/advertisement/06.jpg";
    ad3.subtitle="";
    ad3.productId="none";
    ad3.save(function(err){
        if(!err)
        console.log("Advertisement 250 has been created!");
        else
        console.log("Ad 250 is already there!");
    });

    var ad4 =new AdEntity();
    ad4.adId="A251";
    ad4.title="";
    ad4.orgPrice="";
    ad4.discountPrice="";
    ad4.endDate=new Date(2020,0,0);
    ad4.description="";
    ad4.imageUrl="assets/img/advertisement/electronicsSale.jpg";
    ad4.subtitle="";
    ad4.productId="none";
    ad4.save(function(err){
        if(!err)
        console.log("Advertisement 251 has been created!");
        else
        console.log("Ad 251 is already there!");
    });

    var ad5 =new AdEntity();
    ad5.adId="A252";
    ad5.title="";
    ad5.orgPrice="";
    ad5.discountPrice="";
    ad5.endDate=new Date(2020,0,0);
    ad5.description="";
    ad5.imageUrl="assets/img/advertisement/newAd.gif";
    ad5.subtitle="";
    ad5.productId="none";
    ad5.save(function(err){
        if(!err)
        console.log("Advertisement 252 has been created!");
        else
        console.log("Ad 252 is already there!");
    });

    var ad6 =new AdEntity();
    ad6.adId="A253";
    ad6.title="";
    ad6.orgPrice="";
    ad6.discountPrice="";
    ad6.endDate=new Date(2020,0,0);
    ad6.description="";
    ad6.imageUrl="assets/img/advertisement/shoeSale.jpg";
    ad6.subtitle="";
    ad6.productId="none";
    ad6.save(function(err){
        if(!err)
        console.log("Advertisement 253 has been created!");
        else
        console.log("Ad 253 is already there!");
    });
};