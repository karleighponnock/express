var path = require('path');
var express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const { v1: uuidv1 } = require('uuid');

//exports files to server file reqirements
module.exports = function() {

    app.get("/api/notes", function (req, res) {
        res.json(req.body)
        return res.json(notes);
    });

    app.post("/api/notes", function (req, res) {
        var newNote = req.body
        console.log(uuidv1())
        notes.push(newNote)
        res.json(newNote)
        res.json(req.body)
        return res.json(notes);
    });

    app.delete("/api/notes", function (req, res) {
        handleNoteDelete()
        res.json(req.body)
        return res.json(notes);
    });
}
