const fs=require('fs')

fs.readFile('file.txt', (err, data) => {
  if (err) {console.log(err)};
  console.log(data.toString());
});

fs.appendFile('file.txt','\nsuriya' ,()=>{console.log("created")})