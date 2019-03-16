//Sending email here
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const nodemailer = require('nodemailer'),
    //creds = require('./creds'),
    transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'synergisticit2020@gmail.com',
            pass: 'synergisticit2020@123',
        },
    }),
    EmailTemplate = require('email-templates').EmailTemplate,
    path = require('path'),
    Promise = require('bluebird');

// I changed the emails from what's in the tutorial because people kept using
// info@geeklaunch.net and sending me their test emails. :P Lesson learned. :)
//
// So yeah, change the emails below from 'example@example.tld' to YOUR email,
// please.
//
// Thank you!
// let users = [
//     {
//         name: 'Nagendra',
//         email: 'nagendra.synergisticit@gmail.com',
//         cemail: 'nagendra.synergisticit@gmail.com',
//         companyName: 'SynergisticIT TECH',
//     },
//     {
//         name: 'Mocha',
//         email: 'nagen@synergisticit.com',
//         cemail: 'nagendra.synergisticit@gmail.com',
//         companyName: 'SynergisticIT TECH',
//     },
// ];

let cdata = [
    {
        vendorName: 'ABC',
        email: 'nagendra.synergisticit@gmail.com',
        vendorId: 'VC92393',
        cemail: 'nagendra.synergisticit@gmail.com',
        companyName:'ABC TECH',
    }, {
        vendorName: 'ABC',
        email: 'nagendra.synergisticit@gmail.com',
        vendorId: 'VC92393',
        cemail: 'nagendra.synergisticit@gmail.com',
        companyName:'ABC TECH',
    }];
function sendEmail (obj) {
    return transporter.sendMail(obj);
}

function loadTemplate (templateName, contexts) {
    let template = new EmailTemplate(path.join(__dirname, 'templates', templateName));
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
    console.log('Yay!');
});
