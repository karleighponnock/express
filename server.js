const htmlroutes = require("./routes/htmlroutes.js");
const apiroutes = require("./routes/apiroutes.js");
const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));
// app.use(htmlroutes);
// app.use(apiroutes);

app.get("/notes", function (req, res) {
    console.log("hello!!!")
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});


app.post("/api/notes", (req, res) => {
console.log("hello world")
const noteObj = req.body;
console.log(noteObj)
noteObj.id = 3;
})

app.delete("/api/notes/:id") , (req, res) => {
}


app.listen (PORT, () => {
console.log(`App listening on port: ${PORT}`);

})