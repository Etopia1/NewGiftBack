const express = require("express");
require("./config/dbConfig");
require(`dotenv`).config()
const port = process.env.PORT || 1188;
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser")


const fileUploader = require("express-fileupload");
const GiftCard = require("./routers/GiftCardRoute")
// const keepServerAlive = require(`./helpers/keepServerAlive`)

const app = express();
app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(fileUploader({
  useTempFiles: true,
  tempFileDir: '/tmp/',  // Temporary directory for storing files
  limits: { fileSize: 50 * 1024 * 1024 }  // Set file size limit if needed (5MB example)
}))
app.use(cors({ origin: "*", credentials: true}));
app.use(morgan("dev"));

 app.use("/api/v1", GiftCard );



// keepServerAlive();


app.get('/1', (req, res) => {
   res.send('Server is alive!');
});

app.get("/", (req, res) => {
  res.send("Welcome to Groceria Stores!");
});


app.listen(port, () => {
  console.log("App is currently Up & Running, server is listening to port:", port);
});




// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const passport = require('passport');
// // const session = require('express-session');
// require('./config/passport');
// const cors = require("cors");

// const authRoutes = require('./routers/auth');

// const app = express();

// // Middleware
// app.use(express.json());
// // app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(cors({ origin: "*", credentials: true}));

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error(err));

// // Routes
// app.use('/auth', authRoutes);

// // Start Server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
