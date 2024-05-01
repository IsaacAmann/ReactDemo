const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

app.use(express.static('public'));


app.listen(3002, () => {console.log("running on port 3002")});
