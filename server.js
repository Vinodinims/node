var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
var ejs = require('ejs');
app.set('view engine', 'ejs');
var server = http.createServer(function (req, res) {
    displayForm(res);
});

function displayForm(res) {
    fs.readFile('index.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
                'Content-Length': data.length
        });
         var temp = 'some temp';  //here you assign temp variable with needed value

    var renderedHtml = ejs.render(res, {temp: temp});  //get redered HTML code
    res.end(renderedHtml);
        res.write(data);
        res.end();
    });
}

server.listen(8081);
console.log("server listening on 8081");

var http = require('https');
var url = 'https://restcountries.eu/rest/v1/all';
var fs = require('fs');
http.get(url, function(res){
    var body = '';

    res.on('data', function(chunk){
        body += chunk;
    });

    res.on('end', function(){
        var Response = JSON.parse(body);
        console.log("Got a response: ", Response);
        
    });
}).on('error', function(e){
      console.log("Got an error: ", e);
});