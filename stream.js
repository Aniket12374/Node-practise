const http = require('http');

var fs = require('fs');

const readableStream = fs.createReadStream('myfile2.txt','utf-8');

readableStream.on('data',(chunk)=>{
    console.log('Reading chunk:',chunk);
})

readableStream.on('end',()=>{
    console.log('Finish reading the file');
})

