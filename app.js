/**
 * Created by HoferJ on 31/01/15.
 */
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var csv = require('ya-csv');

var  app= express();
app.use(express.static(path.join(__dirname, "")));

app.use(bodyParser.urlencoded({extended:true}));

app.get("/hello", function(request, response) {

    response.sendFile(path.join(__dirname, "welcome.html"));
});

app.get("/cheeses", function(request, response) {

    response.sendFile(path.join(__dirname, "cheeses.html"));
});

app.post("/booking", function(request, response){
var fullName = request.body.fullName;
var email = request.body.email;


var database = csv.createCsvFileWriter("bookings.csv", {"flags": "a"});
var data = [fullName, email];

database.writeRecord(data);
//close the file booking.csv
database.writeStream.end();


    response.send("Thanks " + request.body.fullName + ", your booking is confirmed");
});

var server = app.listen(8080, function(){

    var host = server.address().address;
    var port = server.address().port;
    console.log("Web app running at http://%s:%s",host,port);
});

