const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require('./config/db.js');
const helmet = require('helmet');
const limiter = require('express-rate-limit')

//Connect DB
connectDB();

//RATE LIMITER
const rateLimiter = limiter({
  windowMs: 1000 * 60 * 15, // every 15 minutes
  max: 200
})

//MIDDLEWARES
//Helmet
app.use(helmet());
app.set('json spaces', 2)
app.use(rateLimiter)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})