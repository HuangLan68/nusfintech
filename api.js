// This script is for app2.js

let express = require("express");

let router = express.Router();

router.get('/', function(request, response) {
    response.send("Hello World!@@")
});

module.exports = {router};