var fs = require('fs');

const writeableStream = fs.createWriteStream('myfile3.txt','utf-8');

writeableStream.write('Hello aniket chaudhary');
writeableStream.write('This is node js');
writeableStream.write('end the data');

writeableStream.on('end',()=>{
    console.log('End the data');
});


