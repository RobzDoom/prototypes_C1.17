var http = require('http');

var server = http.createServer(function(request, response){
      console.log('handling request');
      response.write('initializing request response \n');
      response.end("This server is responding webserver");
    });

    server.listen(3000,function(){
          console.log("Server listening on: http://localhost:3000");
        });
