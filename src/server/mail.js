// src/server/mail.js
import nodemailer from 'nodemailer';
import { password, username } from './crd.js'; // Make sure to create crd.js for your credentials

const mail = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: { user: username, pass: password },
  connectionTimeout: 10000,
});


const sendEmail = async (location) => {
  try {
    // const emailBody = `<p>Location: ${location}</p>`; 
    await mail.sendMail({
      from: username,
      to: ['amisha0160.be21@chitkara.edu.in', 'anshika0218.be21@chitkara.edu.in', 'aashima0021.be21@chitkara.edu.in'],
      subject: 'Urgent Help Required',
      html: `<h1>Help is needed at the following location: </h1>
              <h2><strong>Location:  Chitkara University, Rajpura, Punjab, India</strong></h2>`,
    });
    console.log('Mail sent');
    return true;
  }
  catch (err) {
    console.log('Mail has not sent');
    console.log(err);
    return false;
  }
};

export default sendEmail;
