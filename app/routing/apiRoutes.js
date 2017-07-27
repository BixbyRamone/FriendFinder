
var allFriendsObj = require("../../friendsObj.js");

module.exports = function (app, get) {

	app.post("/api/friends", function(req, res) {
	  var newFriend = req.body;
	  console.log("newFriend: " + JSON.stringify(newFriend));
	  // console.log("newFriend.routename: " + newFriend.routeName);
	  console.log("newFriend.name: " + newFriend.name);

	  allFriendsObj.push(newFriend);

	  
	  res.send("post success");
	});

	app.get("/api/friends", function(req, res) {

		console.log("inside get")
		console.log(allFriendsObj);

		

		return res.json(allFriendsObj);

	});
	};




// app.get("/api/:characters?", function(req, res) {
//   var chosen = req.params.characters;
// return res.json(characters);



