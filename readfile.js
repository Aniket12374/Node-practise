const http = require('http');
var fs = require('fs');

const server = http.createServer(function(req,res) {
    fs.readFile('index.html', function(err,data){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        return res.end()

    })
}).listen(8000);


// const server = http.createServer((req,res)=>{
//     fs.readFile('mynewfile.html',function(err,data){
//         fs.writeHead(200,{'content-type':'text/html'})
//         res.write(data)
//         return res.end()
//     })
// }).listen(7000)


