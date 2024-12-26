const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'vrohit0720@gmail.com',
        pass: 'iemn eirf uovr xfru'
    },
});

module.exports = transporter;