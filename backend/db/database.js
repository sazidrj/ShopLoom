const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((data) => {
        console.log(`MongoDB connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
        console.log(`Error connecting to MongoDB: ${err.message}`);
        // Shutting down the server if unable to connect to the database
        process.exit(1);
    });
}

module.exports = connectDatabase;
