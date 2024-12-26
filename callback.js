function greet(name,callback){
    console.log(`Hello ${name}`)

setTimeout(()=>{
    callback(name)


},5000);
}


function callback(name){
    console.log(name + "is been greeted")

}

greet('Aniket',callback);

