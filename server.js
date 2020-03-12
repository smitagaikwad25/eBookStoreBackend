const express = require('express');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const app = express();

require ('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true })) 

app.use(bodyParser.json())

mongoose.Promise = global.Promise;


mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => {
    console.log("successfully contected to database");
}).catch(err => {
    console.log('could not connect to the database . Exiting now...', err);
    process.exit();
});


app.listen(process.env.PORT, () => {
    console.log("Server is listening on port 3000")
})