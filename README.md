# Note taking application

## Description

This application can be used to write, save, and delete notes. This application uses an express backend then saves and retrieves note data from a JSON file.

## Tech/ Frameworks used

* htmlroutes.js contains :

    * GET `/notes`  which returns the `notes.html` file.

    * GET `*` returns the `index.html` file



* `db.json` stores and retrieve notes using the `fs` module.


* apiroutes.js contains:

    * GET `/api/notes` which reads the `db.json` file and returns all saved notes as JSON.

    * POST `/api/notes` - Receives a new note to save on the request body, and adds it to the `db.json` file, and then returns the new note to the client.

    * DELETE `/api/notes/:id` - Receives a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
