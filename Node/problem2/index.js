
var http=require('http')

http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log(req)
    res.end()
}).listen(8001)