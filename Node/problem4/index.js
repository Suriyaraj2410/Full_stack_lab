var http=require('http')
var date=require("./dat_time")
var bp=require("body-parser")
var remaining_days=require('./daysleft')
http.createServer(function (req,res) {
    // res.writeHead(200, {'Content-Type': 'text/html'});
    if (req.method == "POST") {
        bp.urlencoded({ extended: false })(req, res, () => {
         console.log(req.body)
            res.write(daysleft(req.body.currenttime,req.body.endtime) + " Days left");
            res.end();
        });}
        else{
            res.write(date.date_time())
            var remaining=remaining_days.rem().toString()
            res.write("\n")
            res.write(remaining)
            res.end()
        }
 
   
 
}).listen(3000)


function daysleft(ct,ut){
  var x=  new Date(ct)
  var y=  new Date(ut)
const oneDay = 24 * 60 * 60 * 1000;
var datedif=Math.abs(x.getTime()-y.getTime())

 var r=Math.ceil(datedif/(24 * 60 * 60 * 1000))
return r;

}