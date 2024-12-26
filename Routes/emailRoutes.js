const express = require('express');
const { sendEmail } = require('../Controller/emailController');
const router = express.Router();

//POST route for sending email
router.post('/send-email', sendEmail);

module.exports = router;