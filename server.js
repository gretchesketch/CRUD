//dependencies
const express = require("express");
// cors is middleware for express
// and a node.js package
var cors = require('cors');
var app = express();
const dotenv = require("dotenv");

dotenv.config();

app.use(cors());
app.use(express.json());
// set to false because we will not be sending in any form data.
app.use(express.urlencoded({ extended : false}));

//routes
//create
app.post("/", (req, res) => {

});

//read
app.post("/", (req, res) => {

});

//update
app.post("/insert", (req, res) => {

});

//delete
app.get("/getAll", (req, res) => {
    console.log("test");
});