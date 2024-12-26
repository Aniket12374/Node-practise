var fs = require('fs').promises

fs.readFile('myfile2.txt','utf-8')
.then((data)=>{
    console.log(data + 'is define')
})
.catch((error)=>{
    console.log(error + 'error')
});