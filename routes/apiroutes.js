var path = require('path');
var express = require("express");
const app = express();

//exports files to server file reqirements
module.exports = function() {

    app.get("/api/notes", function (req, res) {
        console.log("hello world")
        res.json(req.body)
        return res.json(notes);
    });

    app.post("/api/notes", function (req, res) {
        var newNote = req.body
        notes.push(newNote)
        res.json(newNote)
        res.json(req.body)
        return res.json(notes);
    });

    app.delete("/api/notes", function (req, res) {


        res.json(req.body)
        return res.json(notes);
    });
}
