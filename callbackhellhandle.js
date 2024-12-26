const { error } = require('console');
const { readFile } = require('fs');

var fs = require ('fs').promises

// function readFile (filePath){
//     return fs.readFile(filePath,'utf-8')


// }
// readFile('mynewfile.txt')
// .then((data1)=>{
//     console.log('file 1 content:' + data1)
//     return readFile('myfile2.txt')
// }).then((data2)=>{
//     console.log('file 2 content' + data2)
//     return readFile('myfile3.txt')
// })


// .catch((error)=>{
//     console.log('error:',error)
// })

async function readFiles(){
    try{
        const data1 = await fs.readFile('file3.txt','utf-8')
        console.log('file content:',data1)

        const data2 = await fs.readFile('file2.txt','utf-8')
        console.log('file content:',data2)
    }catch(error){
        console.log('error:',error);

    }

}
readFiles();
