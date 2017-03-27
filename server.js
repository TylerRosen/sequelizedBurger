// Dependencies

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

var app = module.exports = express();
var port = process.env.PORT || 3000;

// Displays static content from public folder
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Handlebars

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.

var burgersController = require("./controllers/burgers_controller.js");

app.use("/", burgersController);
// app.use(app.router);

app.listen(port);