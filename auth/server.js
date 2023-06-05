const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const corsInit = require('./config/corsInit');
const errorHandler = require('./middlewares/errorHandler');
const mongoConnect = require('./config/mongodb');
const userRoute = require('./routes/userRoute');
const authRoute = require('./routes/authRoute');
const morgan = require('morgan');

//---- initialize express app ----
const app = express();

//---- init middleware ----
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(morgan('tiny'));

//---- import routes ----
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/user', userRoute);

//---- handle error ----
app.use(errorHandler);

//---- env port ----
const PORT = process.env.PORT || 5000;

//---- listen for connections ----
app.listen(PORT, () => {
  mongoConnect();
  console.log(`Server running: ${PORT}`.bgMagenta);
});
