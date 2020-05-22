var express = require('express');
var router = express.Router();
var hbs = require('nodemailer-express-handlebars');
var MailConfig = require('../config/email');
var gmailTransport = MailConfig.GmailTransport;

router.get('/', (req, res, next) => {
    MailConfig.ViewOption(gmailTransport,hbs);
    MailConfig.ViewOption(gmailTransport,hbs);
    let HelperOptions = {
        from: '"Tariqul islam" <tariqul.islam.rony@gmail.com>',
        to: 'tariqul@itconquest.com',
        subject: 'Hellow world!',
        template: 'test',
        context: {
            name:"tariqul_islam",
            email: "tariqul.islam.rony@gmail.com",
            address: "52, Kadamtola Shubag dhaka"
        }
    };
    console.log(HelperOptions);
    gmailTransport.sendMail(HelperOptions, (error,info) => {
        if(error) {
            console.log(error);
            res.json(error);
        }
        console.log("email is send");
        console.log(info);
        res.json(info)
    });
    res.render('email');
});

module.exports = router;