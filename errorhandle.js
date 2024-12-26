var fs = require('fs');

fs.readFile('file2.txt', 'utf-8', function(err,data){
    if(err){
        console.log('error in data:' , err)
    }
    else{
        console.log('data is available')
    }

})

