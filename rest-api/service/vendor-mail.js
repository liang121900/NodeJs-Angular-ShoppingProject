//Sending email here
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const nodemailer = require('nodemailer'),
//creds = require('./creds'),
transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sgisticit@gmail.com',
        pass: '$yn3rg1s',
    },
}),
EmailTemplate = require('email-templates').EmailTemplate,
path = require('path'),
Promise = require('bluebird'); // Promise API 


// let cdata = [
//     {
//         vendorName: 'Nagendra',
//         email: 'nagendra.synergisticit@gmail.com',
//         vendorId: 'V9292922',
//         cemail: 'nagendra.synergisticit@gmail.com',
//         companyName: 'SynergisticIT TECH',
//     },
//     {
//         vendorName: 'Nagendra',
//         email: 'nagendra.synergisticit@gmail.com',
//         vendorId: 'V9292922',
//         cemail: 'nagendra.synergisticit@gmail.com',
//         companyName: 'SynergisticIT TECH',
//     },
// ];


//This will just send email for obj data
function sendEmail (obj) {
    return transporter.sendMail(obj);
}

/**
 * This method is used to load your 
 * @param {*} templateName - this is template name 
 * @param {*} contexts  -  data which has to merge
 * Loading html template and merging data 
 */
var count=1;
function loadTemplate (templateName, contexts) {

    let template = new EmailTemplate(path.join(appRoot, 'templates', templateName));

    return Promise.all(contexts.map((context) => {
        return new Promise((resolve, reject) => {
            template.render(context, (err, result) => {
                if (err) reject(err);
                else resolve({
                    email: result,
                    context,
                });
            });
        });
    }));
}

var sendVendorEmail=function(cdata){
     loadTemplate('vendor', cdata).then((results) => {
    return Promise.all(results.map((result) => {
        sendEmail({
            to: result.context.email,
            from: 'Shopping Cart!!!!!!!!',
            subject: result.email.subject,
            html: result.email.html,
            text: result.email.text,
        });
    }));
}).then(() => {
    console.log('Hey Your email has been sent successfully!');
});
};
module.exports.sendEmail=sendVendorEmail;

sendOrderEmail=function(cdata){
     loadTemplate('order-confirmation', cdata).then((results) => {
    return Promise.all(results.map((result) => {
        sendEmail({
            to: result.context.email,
            from: 'Shopping Cart!!!!!!!!',
            subject: result.email.subject,
            html: result.email.html,
            text: result.email.text,
        });
    }));
}).then(() => {
    console.log('Hey Your email has been sent successfully!');
});
};
module.exports.sendOrderEmail=sendOrderEmail;


sendShareEmail=function(cdata){
    loadTemplate('share-product', cdata).then((results) => {
        return Promise.all(results.map((result) => {
            sendEmail({
                //result.content.xxx means looking for data in cdata
                to: result.context.email,
                from: 'Sharing Product!!!!!!!!',
                //result.email.subject/html/text ->subject,html,text in template folder
                subject: result.email.subject,
                html: result.email.html,
                text: result.email.text,
            });
        }));
    }).then(() => {
        
        console.log('Hey Your email has been sent successfully!');
    });
}
module.exports.sendShareEmail=sendShareEmail;

//Terry the function to send cart left reminder email
sendCartReminderEmail=function(cdata){
    
    loadTemplate('cart-reminder', cdata).then((results) => {
        return Promise.all(results.map((result) => {
            sendEmail({
                //result.content.xxx means looking for data in cdata
                to: result.context.email,
                from: 'You Have Items Left in Cart !!!!!!',
                //result.email.subject/html/text ->subject,html,text in template folder
                subject: result.email.subject,
                html: result.email.html,
                text: result.email.text,
            });
        }));
    }).then(() => {
        
        console.log('Hey Your email has been sent successfully!');
    });
}
module.exports.sendCartReminderEmail=sendCartReminderEmail;