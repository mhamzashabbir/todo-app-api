const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const homeRoutes = require('./routes/home');

dotenv.config();
port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(homeRoutes);

mongoose.connect(process.env.MONGODB_URI)
    .then(result => {
        console.log('Connected!, Listening on port: ' + port + '...');
        app.listen(port);
    })
    .catch(err => console.log(err));
