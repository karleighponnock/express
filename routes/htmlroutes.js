var path = require("path");
var express = require("express");
const app = express();

//exports files to server file reqirements
module.exports = function() {

    app.get("/notes", function (req, res) {
        console.log("hello world")
        res.json(req.body)
        res.sendFile(path.join(_dirname, "./notes.html"));
    });
    ///get all has to be last path

    app.get("*", function (req, res) {
        res.sendFile(path.join(_dirname, "./index.html"));
    });

}

