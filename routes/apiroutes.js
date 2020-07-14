var path = require('path');

//exports files to server file reqirements
module.exports = function (app) {

    app.GET("/api/notes", function (req, res) {
        res.json(req.body)
        return res.json(notes);
    });

    app.POST("/api/notes", function (req, res) {
        var newNote = req.body
        notes.push(newNote)
        res.json(newNote)
        res.json(req.body)
        return res.json(notes);
    });

    app.DELETE("/api/notes", function (req, res) {


        res.json(req.body)
        return res.json(notes);
    });
}
