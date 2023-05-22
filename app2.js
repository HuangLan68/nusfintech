// This file is connected with api.js

const express = require("express");
const apis = require("./api");

let app = express();
app.use(express.json())

app.use(apis.router);

app.listen(4000, () => {
    console.log('Example app listening on port 4000')
});