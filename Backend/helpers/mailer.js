const nodemailer = require("nodemailer");

 
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.AUTH_MAIL,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

 
  async function mailer (usermail , subject , message  ) {
  const info = await transporter.sendMail({
    from: "Social Media By Shakhawat",
    to: usermail ,
    subject: subject,
    // text:  message,  
    html: `<b>${message}</b>`, // HTML body
  });
 
}  

module.exports = mailer