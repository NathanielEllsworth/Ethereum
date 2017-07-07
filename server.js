


var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');
var controller = require('./controllers/controller.js');

var app = express();
var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));


app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', controller);
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


