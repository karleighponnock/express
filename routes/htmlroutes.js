var path = require("path");

//exports files to server file reqirements
module.exports = function(app){

app.GET("/notes", function(req, res){
    res.json(req.body)
    res.sendFile(path.join(_dirname, "../routes/notes.html"));
});
///get all has to be last path

app.GET("*", function(req, res){
    res.sendFile(path.join(_dirname, "../routes/.html"));
});

}

