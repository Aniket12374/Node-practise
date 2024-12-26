const { error } = require("console");

function greet(name){
    return new Promise((resolve,reject)=>{
        console.log('Hello' +name);

        setTimeout(() => {
            resolve(name)
            
        }, 2000);
    })
}

greet('Aniket')
.then((name)=>{
    console.log(name+ 'is good boy')
})
.catch((error)=>{
    console.log(error+ 'error')
});
