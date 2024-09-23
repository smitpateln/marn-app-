const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://22it113:AVmOX9T7Pr4sNvUi@cluster0.yl9vn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(connectionString, { useNewUrlParser: true }).catch((e) => {
  console.error('Connection error', e.message);
});

const db = mongoose.connection;

module.exports = db;
