
//====================================================================================//
//------------------------------shipping controller-----------------------------------//
//====================================================================================//

var ShippingEntity = require('../../model/address/shipping-entity');

module.exports.getShippingAddress = (res,req) =>{
    ShippingEntity.find({}, data=>{res.status(200).json(data)});
}

module.exports.postShippingAddress = (res, req) =>{
    var shippingAddress = req.body;
    var shippingEntity = new ShippingEntity();

    for (key in shippingAddress){
        shippingEntity[key] = shippingAddress[key];
    }

    shippingEntity.save(err => {
        if(err){
            res.status(200).json({status:"failed",message:"ERROR:Address was not saved"});
        }else{
            res.status(200).json({status:"success",message:"Data was saved successfully"});
        }
    });
}

module.exports.getShippingAddressByCid = (res,req) =>{
    var reqCid = req.param.cid;

    ShippingEntity.find({cid:reqCid}, (data)=>{res.status(200).json(data)});
}

module.exports.getShippingAddressBySid = (res,req) =>{
    var reqSid = req.param.sid;

    ShippingEntity.findById(reqSid, data => res.status(200).json(data))
}

module.exports.deleteShippingAddressBySid = (res,req) => {
    var reqSid = req.param.sid;

    ShippingEntity.findIdAndDelete(reqSid,err =>{
        if(err){
            res.status(200).json({status:"failed",message:"ERROR: Address was not deleted"});
        }else{
            res.status(200).json({status:"success",message:"Address was deleted successfully"});
        }
    });
}

module.exports.updataShippingAddress = (res,req) =>{
    var reqSid = req.param.sid;
    var address = req.body;

    ShippingEntity.findIdAndUpdate(reqSid, {$set:{
        firstName:address.firstName,
        lastName:address.lastName,
        streetName:address.streetName,
        city:address.city,
        zipCode:address.zipCode,
        district:address.district,
        country:address.country,
        phoneNumber:address.phoneNumber,
        email:address.email
    }}, (err)=>{
        if(err){
            res.status(200).json({status:"failed",message:"ERROR: Address was not updated"});
        }else{
            res.status(200).json({status:"success",message:"address was updated"});
        }
    });

}

//====================================================================================//
//------------------------------Billing controller------------------------------------//
//====================================================================================//
var BillingEntity = require('../../model/address/billing-entity');

module.exports.getBillingAddress = (res,req) =>{
    BillingEntity.find({}, data=>{res.status(200).json(data)});
}

module.exports.postBillingAddress = (res, req) =>{
    var billingAddress = req.body;
    var billingEntity = new BillingEntity();

    for (key in billingAddress){
        billingEntity[key] = billingAddress[key];
    }

    billingEntity.save(err => {
        if(err){
            res.status(200).json({status:"failed",message:"ERROR:Address was not saved"});
        }else{
            res.status(200).json({status:"success",message:"Data was saved successfully"});
        }
    });
}

module.exports.getBillingAddressByCid = (res,req) =>{
    var reqCid = req.param.cid;

    BillingEntity.find({cid:reqCid}, (data)=>{res.status(200).json(data)});
}

module.exports.deleteBillingAddressBySid = (res,req) => {
    var reqBid = req.param.bid;

    BillingEntity.findIdAndDelete(reqBid,err =>{
        if(err){
            res.status(200).json({status:"failed",message:"ERROR: Address was not deleted"});
        }else{
            res.status(200).json({status:"success",message:"Address was deleted successfully"});
        }
    });
}

module.exports.getBillingAddressByBid = (res,req) =>{
    var reqBid = req.param.bid;

    BillingEntity.findById(reqBid, data => res.status(200).json(data))
}

module.exports.updataBillingAddress = (res,req) =>{
    var reqBid = req.param.bid;
    var address = req.body;

    BillingEntity.findIdAndUpdate(reqBid, {$set:{
        firstName:address.firstName,
        lastName:address.lastName,
        streetName:address.streetName,
        city:address.city,
        zipCode:address.zipCode,
        district:address.district,
        country:address.country,
        phoneNumber:address.phoneNumber,
        email:address.email
    }}, (err)=>{
        if(err){
            res.status(200).json({status:"failed",message:"ERROR: Address was not updated"});
        }else{
            res.status(200).json({status:"success",message:"address was updated"});
        }
    });

}