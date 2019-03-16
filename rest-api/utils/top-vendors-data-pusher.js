/* DATA IN MY VENDOR DATABASE:
{
    "_id" : ObjectId("5c134af07f34280bedfdc965"),
    "vcode" : "V100",
    "name" : "Sugar-E Mac Money",
    "email" : "undefined",
    "mobile" : "1234567890",
    "comment" : "undefined",
    "address" : "Chicago",
    "photo" : "imagedb/vendors/profiles/V100_profile.jpg",
    "dom" : ISODate("2018-12-14T06:17:20.705Z"),
    "doe" : ISODate("2018-12-14T06:17:20.705Z"),
    "__v" : 0
}
{
    "_id" : ObjectId("5c134b117f34280bedfdc966"),
    "vcode" : "V200",
    "name" : "Snoop Kid Playa",
    "email" : "undefined",
    "mobile" : "9876543212",
    "comment" : "Atlanta",
    "address" : "undefined",
    "photo" : "imagedb/vendors/profiles/V200_profile.jpg",
    "dom" : ISODate("2018-12-14T06:17:53.643Z"),
    "doe" : ISODate("2018-12-14T06:17:53.643Z"),
    "__v" : 0
}
{
    "_id" : ObjectId("5c134b4d7f34280bedfdc967"),
    "vcode" : "V300",
    "name" : "Missy-G Notorious-T",
    "email" : "undefined",
    "mobile" : "9876543212",
    "comment" : "undefined",
    "address" : "Brooklyn",
    "photo" : "imagedb/vendors/profiles/V300_profile.jpg",
    "dom" : ISODate("2018-12-14T06:18:53.603Z"),
    "doe" : ISODate("2018-12-14T06:18:53.603Z"),
    "__v" : 0
}
{
    "_id" : ObjectId("5c134b6f7f34280bedfdc968"),
    "vcode" : "V400",
    "name" : "Fat Superfly D",
    "email" : "undefined",
    "mobile" : "9876543212",
    "comment" : "undefined",
    "address" : "Oakland",
    "photo" : "imagedb/vendors/profiles/V400_profile.jpg",
    "dom" : ISODate("2018-12-14T06:19:27.412Z"),
    "doe" : ISODate("2018-12-14T06:19:27.412Z"),
    "__v" : 0
}
{
    "_id" : ObjectId("5c134bcb7f34280bedfdc969"),
    "vcode" : "V500",
    "name" : "Biggie P",
    "email" : "undefined",
    "mobile" : "9876543456",
    "comment" : "undefined",
    "address" : "Compton",
    "photo" : "imagedb/vendors/profiles/V500_profile.jpg",
    "dom" : ISODate("2018-12-14T06:20:59.259Z"),
    "doe" : ISODate("2018-12-14T06:20:59.259Z"),
    "__v" : 0
}
{
    "_id" : ObjectId("5c134cfc7f34280bedfdc96a"),
    "vcode" : "V600",
    "name" : "Da Papa G",
    "email" : "undefined",
    "mobile" : "6574839201",
    "comment" : "undefined",
    "address" : "Queens",
    "photo" : "imagedb/vendors/profiles/V600_profile.jpg",
    "dom" : ISODate("2018-12-14T06:26:04.461Z"),
    "doe" : ISODate("2018-12-14T06:26:04.461Z"),
    "__v" : 0
}
*/
var TopVendorEntity=require('../model/top-vendors-entity');
    /*topVendorPosition: { type:Number ,required: true, unique: true },
    vcode: { type: String,required: true, unique: true },
    avgProductRatings: { type:Number }
    */

module.exports=()=>{
ven1=new TopVendorEntity();
ven1.topVendorPosition=0;
ven1.vcode="V100";
ven1.avgProductRatings=4.9;
ven1.numRatings=21000;
//ven1.save();
ven1.save((err)=>{
    if (err)
        console.log("Top Vendor is already created.");
    else
        console.log("Top Vendor has been created!!!");
});

ven2=new TopVendorEntity();
ven2.topVendorPosition=1;
ven2.vcode="V200";
ven2.avgProductRatings=4.5;
ven2.numRatings=19560;
ven2.save((err)=>{
    if (err)
        console.log("Top Vendor is already created.");
    else
        console.log("Top Vendor has been created!!!");
});


ven3=new TopVendorEntity();
ven3.topVendorPosition=2;
ven3.vcode="V300";
ven3.avgProductRatings=4.1;
ven3.numRatings=18700;
ven3.save((err)=>{
    if (err)
        console.log("Top Vendor is already created.");
    else
        console.log("Top Vendor has been created!!!");
});


ven4=new TopVendorEntity();
ven4.topVendorPosition=3;
ven4.vcode="V400";
ven4.avgProductRatings=4.8;
ven4.numRatings=14000;
ven4.save((err)=>{
    if (err)
        console.log("Top Vendor is already created.");
    else
        console.log("Top Vendor has been created!!!");
});

ven5=new TopVendorEntity();
ven5.topVendorPosition=4;
ven5.vcode="V500";
ven5.avgProductRatings=3.7;
ven5.numRatings=10100;
ven5.save((err)=>{
    if (err)
        console.log("Top Vendor is already created.");
    else
        console.log("Top Vendor has been created!!!");
});


ven6=new TopVendorEntity();
ven6.topVendorPosition=5;
ven6.vcode="V600";
ven6.avgProductRatings=4.0;
ven6.numRatings=9000;
ven6.save((err)=>{
    if (err)
        console.log("Top Vendor is already created.");
    else
        console.log("Top Vendor has been created!!!");
});

}
