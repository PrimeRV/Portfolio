const transporter = require('../Config/nodeMailerConfig');

const sendEmail = async (email, subject, text) => {
    try {
        const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to: email,
        subject: subject,
        text: text,
        };

        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { sendEmail };