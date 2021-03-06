var friends = require('../data/friends.js');
var friends = 	[{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[5,1,4,4,5,1,2,5,4,1]
}];

module.exports = function (app) {
	app.get('/api/friends', function(req,res) {
		res.json(friends);
	    });

	app.post('/api/friends', function (req, res) {
		var formSent = req.body;
		newFriend = new Friend(formSent.name, formSent.photo, formSent.scores);
		

		var diff = 0;
		var min = 41;
		var index;

		for (i = 0; i < friends.length; i++) {
			for( j = 0; j < 10; j++) {
				diff += Math.abs(friends[i].scores[j] - newfriends.scores[j]);
			}
			if (diff < min) {
				min = diff;
				index = i;
			}
		}

		friends.push(newFriend);
	});
};
function Friend(name, photo, scores){
  this.name = name;
  this.photo = photo;
  this.scores = scores;
};


		
	// 5.  Determine the user's most compatible friend using the following as a guide:
	//        5.1 - Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
	//        5.2 - With that done, compare the difference between current user's scores against those from other users, question by question. 
	//        5.3 - Add up the differences to calculate the totalDifference.
	// Example:
	// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
	// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
	// Total Difference: 2 + 1 + 2 = 5
	// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
	// The closest match will be the user with the least amount of difference.
	// Once you've found the current user's most compatible friend, display the result as a modal pop-up.
	// The modal should display both the name and picture of the closest match. 
