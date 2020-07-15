var path = require('path');
var express = require("express");
const app = express();
const { v1: uuidv1 } = require('uuid');
const data = require("../db.json")


//exports files to server file reqirements
module.exports = function () {


    //getting notes
    app.get("/api/notes", function (req, res) {
        res.json(req.body)
        return res.json(notes);
    });

    //push new note to notes
    app.post("/api/notes", function (req, res) {
        //set new note text to a variable


        //------ to dooooo use data var filtowrite = [] write data to this variable which is an array in db.json
        var newNote = req.body
        newNote.id = uuidv1();
        console.log(`My new Note ${newNote}`);
        notes.push(newNote)
        res.json(newNote)
        res.json(req.body)
        return res.json(notes);
    });


    //delete note
    app.delete("/api/notes", function (req, res) {
        const note = notes.value;
        editor.value = '';
        for (let i = 0; i < notes.length; i++) {
            const option = notes[i];
            if (option.value === note(id)) {
                notes.removeChild(option);
            };
        }
    })

}
