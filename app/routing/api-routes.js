// 4   - Y our api-routes.js file should contain two routes:
//        4.1 - A GET route with the url /api/friends. 
//		  This will be used to display a JSON of all possible friends.

var friends = require('../data/friends.js');

module.exports = function (app) {

	app.get('/api/friends', function(req,res) {
		res.json(friends);
	    });
	//        4.2 - A POST routes /api/friends. 
	//              - This will be used to handle incoming survey results. 
	//              - This route will also be used to handle the compatibility logic.
	//              - You should save the data in your app as an array of objects. 
	//              - Each of these objects should roughly follow the format below.

	app.post('/api/friends', function (req, res) {
		res.name;
	});
};

var friends = 	[{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
     5,
     1,
     4,
     4,
     5,
     1,
     2,
     5,
     4,
     1
   ]
}];
		
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