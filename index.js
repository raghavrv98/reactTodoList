const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors())

// Body parser middlerware
app.use(express.json());

// connect to mongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
	.then(() => console.log('MongoDB connected'))
	.catch(err => console.log(err));

//routes
const userRoute = require('./routes/api/user');

//user routes 
app.use('/', userRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server run at port ${PORT}`));