const http = require('http');

const server = http.createServer((req,res)=>{
    res.write('Hello Aniket');
    res.end();
});

server.listen(3000,()=>{
    console.log('server listen on 3000 port')
});