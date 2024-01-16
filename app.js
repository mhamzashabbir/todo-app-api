const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://todo:todoApp1@cluster0.0uamrtj.mongodb.net/tasks?retryWrites=true&w=majority')
    .then(result => {
        console.log('Connected!');
        app.listen(8080);
    })
    .catch(err => console.log(err));
