var BillingEntity = require('../../model/address/billing-entity');
var ShippingEntity = require('../../model/address/shipping-entity');
var CustomerCardEntity = require('../../model/customers/customer-card-entity');
var OrderEntity = require('../../model/order/order-Details-entity');
var OrderSummaryEntity = require('../../model/order/order-summary-entity');
var randomstring = require("randomstring");
var EmailService=require('../../service/vendor-mail');
var TransactionEntity = require('../../model/order/transaction-entity');
var ProductEntity = require('../../model/product-entity');

module.exports.checkout = (req,res) => {
    var orderPlacedDetails = req.body;
    var orderID = randomstring.generate(16);
    //var currentdate = Date.now();
    //orderID = orderID + currentdate.getSeconds() + currentdate.getMinutes() 
    //+ currentdate.getHours() + currentdate.getDay() + currentdate.getMonth();
    var message ="";

    //------------------shipping & billing code---------------------///
    //-----------relocation to address controller needed------------//
    var billingEntity = new BillingEntity();
   // var shippingEntity = new ShippingEntity();

    if(!orderPlacedDetails.billingDetails.bid){
        var bid = randomstring.generate(8);
        orderPlacedDetails.billingDetails.bid = bid;
        for(key in orderPlacedDetails.billingDetails){
            billingEntity[key] = orderPlacedDetails.billingDetails[key];
        }
        billingEntity.save(err => {if(err) message =message+"Billing details wasn't saved."});
    }
    
    // if(!orderPlacedDetails.shippingDetails.sid){
    //     var sid = randomstring.generate(8);
    //     orderPlacedDetails.shippingDetails.sid = sid;
    //     for(key in orderPlacedDetails.shippingDetails){
    //         shippingEntity[key] = orderPlacedDetails.shippingDetails[key];
    //     }
    //     shippingEntity.save(err => {if(err) message =message+"Shipping details wasn't saved."});
    
    // }
    

//===================================================================/
//-------------order summary and order detail code-----------------//
    var orderDetails = orderPlacedDetails.orderDetails;
    var orderEntity = new OrderEntity();
    
    orderEntity.products = JSON.stringify(orderDetails.items);
    //orderEntity.products = orderDetails.items;
    
    orderEntity.orderId = orderID;

    var orderSummaryEntity = new OrderSummaryEntity();

    orderSummaryEntity.orderId = orderID;

    orderSummaryEntity.billingAddress = orderPlacedDetails.billingDetails.bid;
    orderSummaryEntity.shippingAddress = orderPlacedDetails.billingDetails.bid;

    orderSummaryEntity.delivaryNotes = orderPlacedDetails.orderNotes;
    orderSummaryEntity.delivaryDate = (new Date() + 7);
    orderSummaryEntity.delivaryTime = "10:00 am";
    orderSummaryEntity.tax = orderDetails.tax;
    orderSummaryEntity.total = orderDetails.total;
//======================================================================//

    var paymentDetails = orderPlacedDetails.paymentDetails;
    

    if(paymentDetails.paymentType == "card"){

        var customerCardEntity = new CustomerCardEntity();
        customerCardEntity.customerId = orderPlacedDetails.customerId;
        customerCardEntity.cardNumber = paymentDetails.cardNumber;
        customerCardEntity.CardType = paymentDetails.ctype;
        customerCardEntity.expDate = paymentDetails.expDate;
    }

    var transactionEntity = new TransactionEntity();
    transactionEntity.status = "confirmation";
    transactionEntity.tid = randomstring.generate(8);
    transactionEntity.type = paymentDetails.paymentType;
    transactionEntity.total = orderSummaryEntity.total;
    transactionEntity.orderId = orderID;

//==========================================================================//
//at this point all neccasery table entities have been populated.
//=====================================================================//

var emailDetails = [{customerFirstName: orderPlacedDetails.billingDetails.firstName, 
    customerLastName:orderPlacedDetails.billingDetails.lastName,
    email: orderPlacedDetails.billingDetails.email,
    orderId: orderID,
    cart: JSON.parse(orderEntity.products),
    total: orderPlacedDetails.orderDetails.total,
}];

emailDetails[0].cart = getCartDetails(emailDetails[0].cart);

transactionEntity.save(err =>{
    if(err){
        return res.status(500).json({status:"fail",message:"There was an error in proccesing the tarnsaction"});
    }else{
        orderEntity.save(err =>{
            if(err){
                TransactionEntity.findByIdAndDelete(orderID,()=>{console.log('rolling back failed transaction')});
                return res.status(500).json({status:"fail",message:"There was an error in saving the order details"});
            }else{
                orderSummaryEntity.save(err =>{
                    if(err){
                        TransactionEntity.findByIdAndDelete(orderID,()=>{console.log('rolling back failed transaction')});
                        OrderEntity.findByIdAndDelete(orderID,()=>{console.log('rolling back failed transaction')});
                        return res.status(500).json({status:"fail",message:"There was an error in saving the order summary"});
                    }else{
//if all saving is successfull continues
//else return with an error
                        EmailService.sendOrderEmail(emailDetails);
                        res.status(200).json({status:"success",message:"order was placed successfully"});
                    }
                });
            }
        });
    }
});



}

function getCartDetails(cart){
    
    var pids = [];

    for(i = 0;i < cart.length;i++){
        pids[i] = cart[i].pid;
    }

    ProductEntity.find({
        'pid': { 
           
           $in: pids
           
        }
     }, function(err, data){
        if(err){
           return cart;
        }
        for(i = 0;i < cart.length;i++){
            for(x = 0; x < data.length;x++){
                if(cart[i].pid == data[x].pid){
                    cart[i].productUrl = data[x].imageUrl;
                    cart[i].productName = data[x].title;
                }
            }
        }
     });
     
     return cart;
}

module.exports.updateStatus = (req,res) => {

    
}