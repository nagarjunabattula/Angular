var express = require('express');
var http = require('http');
var path = require('path');
var app = express();

//app.get('/', function (req, res) {
//  res.send('Hello World!');
//});
app.set('port', process.env.PORT || 9999);

//app.use(express.static(path.join(__dirname, '14login')));
app.use(express.static(path.join(__dirname, 'public')));

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
    process.stdout.write('\x07');
});

//app.listen(8080, function () {
  //console.log('Example app listening on port 80!');
//});
