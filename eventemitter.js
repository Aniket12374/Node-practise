const http = require('http')

const EventEmitter = require('events');

// To create instance of event to manage event
const myeventemitter = new EventEmitter();

myeventemitter.on('greet', (name,age)=>{
    console.log(`Hello my name is ${name} and age is ${age}`)
})

myeventemitter.on('event',()=>{
    console.log('Hello node js')
})
myeventemitter.on('event',()=>{
    console.log('Hello world')
})
// It trigger the event 
myeventemitter.emit('greet','Aniket',25)
myeventemitter.emit('event')

