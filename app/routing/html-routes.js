// 3   - Your html-routes.js file should include two routes:
  //      3.1 - A GET Route to /survey which should display the survey page.
  //      3.2 - A default USE route that leads to home.html which displays the home page.
var path = require('path');
module.exports = function (app) {
	app.get('/survey', function(req,res) {
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	    });

	app.use(function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
};