require('dotenv').config();
const mongoose = require("mongoose");
const mongoPath = require("../config/bot").mongoPath;

module.exports = async() => {
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    return mongoose;
};
