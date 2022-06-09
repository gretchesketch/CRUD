//dependencies
const express = require("express");
// cors is middleware for express
// and a node.js package
var cors = require('cors');
var app = express();
const dotenv = require("dotenv");
const { response } = require("express");
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

dotenv.config();

app.use(cors());
app.use(express.json());
// set to false because we will not be sending in any form data.
app.use(express.urlencoded({ extended : false}));

//routes
//create
app.post("/insert", (req, res) => {

});

//read
app.get("/getAll", (req, res) => {
    response.json({
        success: true
    });
});

//update
app.post("/", (req, res) => {

});

//delete
app.get("/", (req, res) => {
    
});

//app listening on PORT
app.listen(process.env.PORT, () => console.log("app is running"));