/**
 * Created by nagendra on 30/11/2018.
 */

var EmailConfig=require('../config/email-service');
var nodeMailer = require("nodemailer");
var EmailTemplate = require('email-templates');
var sender = 'smtps://synergisticit2020%40gmail.com' 
var password = 'synergisticit2020@123'  // password of the email to use
var transporter = nodeMailer.createTransport({
     service: 'gmail',
     auth: {
       user: EmailConfig.username,
       pass: EmailConfig.password
     }
   });
 // var transporter = nodeMailer.createTransport(sender + ':' + password + '@smtp.gmail.com');


// create template based sender function
// assumes text.{ext} and html.{ext} in template/directory
var sendResetPasswordLink = transporter.templateSender(
   new EmailTemplate('../templates/resetpassword'), {
        from: 'nagen@synergisticit.com',
});

exports.sendPasswordReset = function (email, username, name, tokenUrl) {
    // transporter.template
    sendResetPasswordLink({
        to: email,
        subject: 'Password Reset - synergisticit.com'
    }, {
        name: name,
        username: username,
        token: tokenUrl
    }, function (err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log('Link sent\n' + JSON.stringify(info));
        }
    });
};