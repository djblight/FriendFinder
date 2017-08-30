// requires path package for file path
var path = require ("path");

// Routing
module.exports = function(app) {
    // Get request
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
    // default to Home if no route found
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
}