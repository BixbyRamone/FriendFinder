var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();// require("express")()
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



require("./app/routing/apiRoutes.js")(app, path);
require("./app/routing/htmlRoutes.js")(app, path);
// require("./app/public/survey.html")(app, path);

// function addFriend(request, response) {
// 	var data = request.params;
// 	var friend = data.name;
// 	var reply;

// 	if (friend) {
// 		reply = {
// 			msg: friend
// 		}
// 	}

// 	response.send(reply);
// }

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});