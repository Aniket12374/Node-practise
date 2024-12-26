const http = require('http')
var fs = require('fs');

fs.open('mynewfile.txt','w',function(err,file){
    if(err) throw err;
    console.log('Saved')
})