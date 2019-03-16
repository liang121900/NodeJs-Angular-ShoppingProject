var EmailConfig=require('../config/email-service');
var nodemailer = require('nodemailer');
module.exports.sendVendorRegEmail=function(email){
    //write code to send email;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: EmailConfig.username,
          pass: EmailConfig.password
        }
      });

      var mailOptions = {
        from: EmailConfig.username,
        to: email,
        subject: 'Regarding registration confirmation!',
        text: 'Hey! you have registered with us successfully!'
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
};