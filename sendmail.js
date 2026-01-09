function sendMailOperation(mailadress){
    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'bankacrm@gmail.com', // Your Gmail address
            pass: 'fxlh ymrm aspt rfwg'        // Your password
        }
    });
    
    // Rest of the code remains the same
    
    
    var mailOptions = {
        from: 'temp@gmail.com', //You must enter your mail
        to: mailadress,
        subject: 'Merhaba Sevgili Kullanıcımız',
        text: 'YTU Bankasını kullandığınız için teşekkür eder, iyi günler dileriz.:)'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
        console.log(error);
        } else {
        console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = {
    sendMailOperation
  }
