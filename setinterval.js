function result(name){
    console.log(name+ 'is good boy')
}

const name = 'Aniket'
const interval = setInterval(() => {
    result(name)
    
}, 2000);

result(name)