var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Welcome to Kode2Cloud! We provide Freelancing Service on DevOps and Cloud'); //write a response to the client
  res.end(); //end the response
}).listen(80); //the server object listens on port 80

