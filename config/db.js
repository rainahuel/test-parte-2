require('../config/config')
const mongoose = require('mongoose');

const connectDB = async () => {
    const connection = await mongoose.connect(process.env.URLDB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });

    console.log(`MongoDB conectado: ${connection.connection.host}`);
}; 

module.exports = connectDB;