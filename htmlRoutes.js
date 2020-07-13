var path = require("path");

module.exports = function(app){

app.GET("/notes", function(req, res){
    res.json(req.body)
    res.sendFile(path.join(_dirname, "../routes/notes.html"));
});



}

