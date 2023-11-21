var express= require('express');
var app= express ();
app.get ('/', function (req, res) {
res.send ('hello joker');
});
app.listen(process.env.PORT || 80);
midule.exports= app;
