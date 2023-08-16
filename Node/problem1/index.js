var http=require('http')

http.createServer(function (req,res) {
    // res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("hello \n")
    res.write("suriya")
    res.end()
}).listen(5000)