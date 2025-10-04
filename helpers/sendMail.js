const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail", // just use service
    auth: {
      user: process.env.MAIL_ID,        // your Gmail address
      pass: process.env.MAIL_PASSWORD,  // your Gmail App Password
    },
  });

  const mailOptions = {
    from: `"Your App" <${process.env.MAIL_ID}>`, // must match MAIL_ID
    to: options.email,
    subject: options.subject,
    html: options.html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Message sent:", info.messageId);
  } catch (error) {
    console.error("❌ Email send error:", error);
  }
};

module.exports = { sendEmail };
