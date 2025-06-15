
// exports.paymentReceiptTemplate = (
//   Name,
//   Currency,
//   Redemptioncode,
//   Pin,
//   Amount,
//   userEmail,
//   GiftCardCvv,
//   ExpireDate,
// ) => {
//   return `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>Gift Card Confirmation</title>
//   <style>
//     body {
//       margin: 0;
//       padding: 0;
//       font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//       background-color: #f5f5f5;
//       color: #333;
//     }
//     .container {
//       max-width: 600px;
//       margin: 40px auto;
//       background: #fff;
//       border-radius: 10px;
//       overflow: hidden;
//       box-shadow: 0 5px 15px rgba(0,0,0,0.1);
//     }
//     .header {
//       background-color: #007bff;
//       padding: 20px;
//       color: white;
//       text-align: center;
//     }
//     .header h2 {
//       margin: 0;
//     }
//     .content {
//       padding: 20px;
//     }
//     .content p {
//       font-size: 16px;
//       line-height: 1.6;
//       margin-bottom: 16px;
//     }
//     table {
//       width: 100%;
//       border-collapse: collapse;
//       margin-top: 20px;
//     }
//     th, td {
//       padding: 12px;
//       border: 1px solid #eaeaea;
//       text-align: left;
//     }
//     th {
//       background-color: #007bff;
//       color: white;
//     }
//     td {
//       background-color: #f9f9f9;
//     }
//     .footer {
//       text-align: center;
//       font-size: 12px;
//       color: #aaa;
//       padding: 15px;
//       background-color: #f0f0f0;
//     }

//     @media (max-width: 600px) {
//       .container {
//         margin: 20px 10px;
//       }
//       .content, .header, .footer {
//         padding: 15px;
//       }
//       th, td {
//         font-size: 14px;
//         padding: 10px;
//       }
//     }
//   </style>
// </head>
// <body>
//   <div class="container">
//     <div class="header">
//       <h2>Gift Card Confirmation</h2>
//     </div>
//     <div class="content">
//       <p>Dear ${userEmail},</p>
//       <p>We are happy to inform you that your gift card has been successfully collected. Below are the details:</p>

//       <table>
//         <tr>
//           <th>Gift Card Name</th>
//           <td>${Name}</td>
//         </tr>
//         <tr>
//           <th>Currency</th>
//           <td>${Redemptioncode}</td>
//         </tr>
//         <tr>
//           <th>Amount</th>
//           <td>${Amount}</td>
//         </tr>
//         <tr>
//           <th>Redemption Code</th>
//           <td>${Redemptioncode}</td>
//         </tr>
//         <tr>
//           <th>Pin Code</th>
//           <td>${Pin}</td>
//         </tr>
//         <tr>
//           <th>CVV</th>
//           <td>${GiftCardCvv}</td>
//         </tr>
//         <tr>
//           <th>Expiry Date</th>
//           <td>${ExpireDate}</td>
//         </tr>
//         <tr>
//           <th>Status</th>
//           <td><strong style="color:green;">Success</strong></td>
//         </tr>
//       </table>

//       <p>If you have any questions regarding this payment, feel free to contact our support team.</p>
//     </div>
//     <div class="footer">
//       &copy; ${new Date().getFullYear()} Eto Gift Card. All rights reserved.
//     </div>
//   </div>
// </body>
// </html>`;
// };

exports.paymentReceiptTemplate = (
  Name,
  Currency,
  Amount,
  Redemptioncode
) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Gift Card Confirmation</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f5f5f5;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #fff;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
    .header {
      background-color: #007bff;
      padding: 20px;
      color: white;
      text-align: center;
    }
    .header h2 {
      margin: 0;
    }
    .content {
      padding: 20px;
    }
    .content p {
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 16px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }
    th, td {
      padding: 12px;
      border: 1px solid #eaeaea;
      text-align: left;
    }
    th {
      background-color: #007bff;
      color: white;
    }
    td {
      background-color: #f9f9f9;
    }
    .footer {
      text-align: center;
      font-size: 12px;
      color: #aaa;
      padding: 15px;
      background-color: #f0f0f0;
    }

    @media (max-width: 600px) {
      .container {
        margin: 20px 10px;
      }
      .content, .header, .footer {
        padding: 15px;
      }
      th, td {
        font-size: 14px;
        padding: 10px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Gift Card Confirmation</h2>
    </div>
    <div class="content">
       <p>Dear User,</p>
      <p>We are happy to inform you that your gift card has been successfully collected. Below are the details:</p>

      <table>
        <tr>
          <th>Gift Card Name</th>
          <td>${Name}</td>
        </tr>
        <tr>
          <th>Currency</th>
          <td>${Currency}</td> 
        </tr>
        <tr>
          <th>Amount</th>
          <td>${Amount}</td>
        </tr>
        <tr>
          <th>Redemption Code</th>
          <td>${Redemptioncode}</td>
        </tr>
   
        <tr>
          <th>Status</th>
          <td><strong style="color:green;">Success</strong></td>
        </tr>
      </table>

      <p>If you have any questions regarding this payment, feel free to contact our support team.</p>
    </div>
    <div class="footer">
      &copy; ${new Date().getFullYear()} Eto Gift Card. All rights reserved.
    </div>
  </div>
</body>
</html>`;
};



exports.forgotPasswordTemplate = (otp, fullName) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body style="font-family: 'Poppins', Arial, sans-serif">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
            <td align="center" style="padding: 20px;">
                <table class="content" width="600" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse;  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px; border:2px solid black;">
                    <!-- Header -->
                    <tr>
                        <td class="header" style="background-color: #0e0d3a; padding: 40px; text-align: center; color: white; font-size: 24px;">
                            Verify your Email
                        </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                        <td class="body" style="padding: 30px; text-align: left; font-size: 25px; line-height: 1.6;">
                        Hello, ${fullName}  <br>
                       
                        <br><br>
                          This is Your one-Time-Password to Reset you New password
                        </td>
                    </tr>

                    <!-- Call to action Button -->
                    <tr>
                        <td style="padding: 0px 40px 0px 40px; text-align: center;">
                            <!-- CTA Button -->
                            <table cellspacing="0" cellpadding="0" style="margin: auto;">
                                <tr>
                                    <td align="center" style="background-color: #0b0830; padding: 10px 20px; border-radius: 5px;">
                                        <a href="#" target="_blank" style="color: #ffffff; text-decoration: none; font-weight: bold; font-size: 30px; gap: 10px;">${otp}</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td class="body" style="padding: 40px; text-align: center; font-size: 19px; line-height: 1.6;">
                           And This Code Expires in <span style="color: red;">10 Minutes</span>
                        </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                        <td class="footer" style="background-color: #080516; padding: 40px; text-align: center; color: white; font-size: 14px;">
                        Copyright &copy; 2024 | Eto Shopping
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
 `
}