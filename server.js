const express = require('express');
const app = express();
const mongoose  = require('mongoose');
const {PORT, DATABASE_URL} = require("./config") 

// Middleware 
app.use(express.json())
app.set('view engine', 'ejs');

// Routes
const animalsController = require('./controllers/animals');
app.use('/animals', animalsController);

// Listen at the bottom
mongoose.connect(DATABASE_URL).then(
    () => {
    app.listen(4000, () => {
        console.log(`🏝️ Server is listening to PORT ${PORT} 🎧`)
    });
});
