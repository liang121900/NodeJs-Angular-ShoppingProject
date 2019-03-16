//Terry for shopping cart cron service
const cron = require("node-cron");
const CartEntity=require('../model/customers/customer-cart-entity');
var vendormail=require('./vendor-mail');
var appConfig=require('../config/app.config')

function sendCartReminderEmail  (cart){
    let currentTime = new Date();
    let dom = new Date(cart.dom);
    let difference = new Date(currentTime - dom);
    //if longer than 10 minutes since last time modified, check if the cart is empty and send the reminder email
    if (difference.getMinutes() > 30) {
        let products = [];
        let totalPrice=0;
        cart.products.forEach(prod => {
            let prodTemp=JSON.parse(prod)
            products.push(prodTemp);
            totalPrice+=prodTemp.price;
        });
        //if the cart is not empty, and the username is email (username is email when logging in by google, otherwise cannot send as do not have email info), send the email
        if (products.length > 0&&cart.username.includes('@')) {
            let cdata=[{
                //assume username is emailaddress
                email:cart.username,
                userName:cart.username,
                products:products,
                total:totalPrice,
                companyName: appConfig.cname,
                cemail:appConfig.cemail,
                //send the url with the _id of the record
                cartUrl:appConfig.SHOPPING_CART_URL+'/'+cart._id
            }];


            vendormail.sendCartReminderEmail(cdata);
            
        }
    }
};



var cartReminder = function () {

    //cron.schedule("5 * * * * *", function () {
    cron.schedule("0/30 * * * *", function () {
        console.log("Checking for cart left and sending reminder emails");
        CartEntity.find({}, (err, carts) => {
            carts.forEach(cart => {
                sendCartReminderEmail(cart);
            });

        });
    });

}
module.exports.cartReminder=cartReminder;
