var http = require('http');
var url = require('url');
var fs = require('fs');


http.createServer(function (req, res) {
  /*res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);*/

  fs.readFile('./demo.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });

  //create a file named mynewfile3.txt:
/*fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});*/

fs.unlink('mynewfile3.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});


}).listen(8080);