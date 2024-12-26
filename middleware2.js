
const express = require('express');
const app = express();

const PORT = 5000
function eligiblevoting(req,res,next){


    const age = req.body.age;
    if(age && age>=18){
        next();
    }
    else{
        return res.status(400).json({messeage:'You must be 18 year old '})
    }

    
}

app.use(express.json())

    // app.post('/vote', eligiblevoting, (req,res)=>{
    //      res.json({messeage:'you are eligible'});

    // })

app.post('/vote', eligiblevoting, (req, res) => {
    res.send({ message: 'You are eligible to vote.' });
});

 app.get('/abc', (req,res)=>{
        res.send('you are not eligible');

    })

    app.listen(PORT, ()=>{
     console.log(`Server is running on http://localhost:${PORT}`);

    })