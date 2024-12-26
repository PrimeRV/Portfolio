const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors()); // To enable cross-origin requests if needed

// Default route
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Setup the transporter (Gmail account details)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'vrohit0720@gmail.com', // Replace with your Gmail address
        pass: 'iemn eirf uovr xfru',   // Replace with your Gmail password (or use an App Password)
    },
});

// API route for form submission
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: 'your-email@gmail.com', // Your email address
        to: 'vrohit0720@gmail.com',  // Your email address (recipient email)
        subject: `New message from ${name}`, // Subject with user's name
        text: `
            You have received a new message!
            
            Name: ${name}
            Email: ${email}
            Message: ${message}
            
            Please respond to ${email}.
        `, // The body of the email including user details
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error:', error);
            return res.status(500).send('Error in sending email');
        }
        console.log('Email sent:', info.response);
        res.status(200).send('Email sent successfully');
    });
});

const port = 5000; // Port number
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
