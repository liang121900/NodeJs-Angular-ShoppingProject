/*{
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

var VendorEntity=require('../model/vendor-entity');

module.exports=(req, res)=>{
    var ven1=new VendorEntity;
    ven1.vcode="V100";
    ven1.name="Sugar-E Mac Money";
    ven1.mobile=1234567890;
    ven1.address="Chicago"
    ven1.photo="imagedb/vendors/profiles/V100_profile.jpg";
    ven1.save((err)=>{
        if (err)
            console.log("Vendor is already created.");
        else
            console.log("Vendor has been created!!!");
    });
    

    var ven2=new VendorEntity;
    ven2.vcode="V200",
    ven2.name="Snoop Kid Playa",
    ven2.mobile=9876543212;
    ven2.address="Atlanta";
    ven2.photo="imagedb/vendors/profiles/V200_profile.jpg";

    ven2.save((err)=>{
        if (err)
            console.log("Vendor is already created.");
        else
            console.log("Vendor has been created!!!");
    });
    

    var ven3=new VendorEntity;
    ven3.vcode="V300",
    ven3.name="Missy-G Notorious-T",
    ven3.mobile="9876543212";
    ven3.address="Brooklyn";
    ven3.photo="imagedb/vendors/profiles/V300_profile.jpg";
    ven3.save((err)=>{
        if (err)
            console.log("Vendor is already created.");
        else
            console.log("Vendor has been created!!!");
    });

    var ven4=new VendorEntity;
    ven4.vcode="V400",
    ven4.name="Fat Superfly D",
    ven4.mobile="9876543212";
    ven4.address="Oakland";
    ven4.photo="imagedb/vendors/profiles/V400_profile.jpg";
    ven4.save((err)=>{
        if (err)
            console.log("Vendor is already created.");
        else
            console.log("Vendor has been created!!!");
    });
    
    var ven5=new VendorEntity;
    ven5.vcode="V500",
    ven5.name="Biggie P",
    ven5.mobile="9876543456";
    ven5.address="Compton";
    ven5.photo="imagedb/vendors/profiles/V500_profile.jpg";
    ven5.save((err)=>{
        if (err)
            console.log("Vendor is already created.");
        else
            console.log("Vendor has been created!!!");
    });
    

    var ven6=new VendorEntity;
    ven6.vcode="V600",
    ven6.name="Da Papa G",
    ven6.mobile="6574839201";
    ven6.address="Queens";
    ven6.photo="imagedb/vendors/profiles/V600_profile.jpg";
    ven6.save((err)=>{
        if (err)
            console.log("Vendor is already created.");
        else
            console.log("Vendor has been created!!!");
    });
}