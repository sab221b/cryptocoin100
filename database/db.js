const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cryptocoin100', { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('MongoDB connection succeeded..')
    } else {
        console.log('Error in DB connection: ' + err);
    }
});

require('../model/crypto.model');
// require('./profile.model');
// require('./posts.model');