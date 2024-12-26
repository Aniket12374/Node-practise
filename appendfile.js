const http = require('http');
var fs = require('fs');

// fs.appendFile('mynewfile.html','Hello node js',function(err){
//     if(err) throw err;
//     console.log('saved')
// });

fs.appendFile('mynewfile.html','Hello aniket',function(err){
    if(err) throw err;
    console.log('Data saved')
})
