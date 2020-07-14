const htmlroutes = require("./routes/htmlroutes.js");
const apiroutes = require("./routes/apiroutes.js");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));
app.use(htmlroutes);
app.use(apiroutes);

app.post("/api/notes", (req, res) => {

const noteObj = req.body;
noteObj.id = 3;
})

app.delete("/api/notes/:id") , (req, res) => {

}


app.listen (PORT, () => {
console.log(`App listening on port: ${PORT}`);

})