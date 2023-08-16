
var http=require('http')
var body=require('body-parser')

http.createServer(function (req,res) {
   
     res.writeHead(200, {'Content-Type': 'text/html'});
    console.log(__filename)
    res.end()
}).listen(8001)