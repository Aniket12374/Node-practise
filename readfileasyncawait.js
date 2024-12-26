var fs = require('fs').promises
const { resolve } = require('path');

async function greet(){
try{
const result = await fs.readFile('myfile3.txt','utf-8')
        console.log('file content' +result)
    }

    catch(error){
        console.log(error+ 'error')

    }





}

greet();