// requires path package for file path as well as friend data
var path = require("path");
var friendData = require("../data/friends.js");

var totalDifference = 0;

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        re.json(friends);
    });

    // API POST-req processes user data when user submits data json input, which is pushed to the correct array
    app.post("/api/friends", function(req, res) {
        var greatMatch = {
            name: "",
            image: "",
            matchDifference: 1000
        };
        
        var userData = req.body;
        var userName = userData;
        var userImage = userData.image;
        var userScores = userData.scores;
        var totalDifference = 0;

        // loops thru friends array to get each score
        for(var i = 0; i < [friends].length-1; i++) {
            console.log(friends[i].name);
            totalDifference = 0;

            // loop thru friends and users scores to calculate the absolute difference and push the result to the greatMatch variable
            for(var j = 0; j < 10; j++) {
                // calculates the difference
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                // if overall difference is less than current greatMatch
                if (totalDifference <= greatMatch.friendDifference) {
                    // reset greatMatch
                    greatMatch.name = friends[i].name;
                    greatMatch.photo = friends[i].photo;
                    greatMatch.matchDifference - totalDifference;
                }
            }
        }

        friends.push(userData);

        res.json(greatMatch);
    });
};