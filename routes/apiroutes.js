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
        const note = notes.value;
    window.localStorage.removeItem(note);
    editor.value = '';
    for (let i = 0; i < notes.length; i++) {
        const option = notes[i];
        if (option.value === note) {
            notes.removeChild(option);
    });
}
