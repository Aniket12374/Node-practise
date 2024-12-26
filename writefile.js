const http = require('http');
var fs = require('fs');

fs.writeFile('myfile3.txt','Hello world',function(err,file){
    if(err) throw err;
    console.log('file is create');
})