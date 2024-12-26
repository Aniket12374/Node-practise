const express = require('express')

const app = express();

app.get('/',(req,res)=>{
    res.send('Welcome to express js')
})

app.listen(4000,()=>{
    console.log('port')
});