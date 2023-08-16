const fs=require('fs')

fs.readFileSync('file.txt','utf-8',function(err,data){
    console.log(data)
}
)