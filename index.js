var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Welcome to Kode2Cloud! We provide freelancing services on Fiverr.'); //write a response to the client
  res.end(); //end the response
}).listen(80); //the server object listens on port 80
