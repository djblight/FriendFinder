// requires path package for file path as well as friend data
var path = require("path");
var friendData = require("../data/friends.js");

var totalDifference = 0;

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    // API POST-req processes user data when user submits data json input, which is pushed to the correct array
    app.post("/api/friends", function(req, res) {
        var match = {
            name: "",
            image: "",
            matchDifference: 1000
        };
        
        var userData = req.body;
        var userName = userData.name;
        var userImage = userData.image;
        var userScores = userData.scores;
        var totalDifference = 0;

        // loops thru friends array to get each score
        for(var i = 0; i < friendData.length-1; i++) {
            console.log(friendData[i].name);
            totalDifference = 0;

            // loop thru friends and users scores to calculate the absolute difference and push the result to the match variable
            for(var j = 0; j < 10; j++) {
                // calculates the difference
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendData[i].scores[j]));
                // if overall difference is less than current greatMatch
                if (totalDifference <= match.friendDifference) {
                    // reset match
                    match.name = friendData[i].name;
                    match.photo = friendData[i].photo;
                    match.matchDifference - totalDifference;
                }
            }
        }

        friendData.push(userData);

        res.json(match);
    });
};