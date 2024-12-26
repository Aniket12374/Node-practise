const express = require('express');
const app = express();
var fs = require('fs');

const users = require("./MOCK_DATA.json");

const PORT = 8000;

// Middleware to use to fetch the newly created data of form in postman app 
app.use(express.urlencoded({extended:false}));

app.use((req,res,next)=>{
  console.log('Hello for Middleware 1')
  req.username = 'Aniket';
  next();
})

// app.use((req,res,next)=>{
//   console.log('Hello for Middleware 2')
//   return res.end("Hello aniket")
// })

app.use((req,res,next)=>{
  console.log('Hello for Middleware 2',req.username)
  next();
})



// REST API
app.get("/api/users:id",(req,res)=>{
   
  return res.json(users);

})

// // To get the id of the user in API
// app.get("/api/users/:id", (req,res)=>{
//   const id = Number(req.params.id);
//   const user = users.find(user => user.id === id);
//   return res.json(user)
// })

// app.route("/api/users:id").get((req,res)=>{

//   return res.json({ status:'PENDING'});
  
// }).patch((req,res)=>{
//  return res.json({status:'PENDING'});
// })
// .delete((req,res)=>{
// return res.json({ status:'PENDING'});
// })

app.post("/api/users",(req,res)=>{

 const body = req.body;
 console.log("Body",body);
 users.push({...body, id:users.length+1})
 fs.writeFile('MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
  return res.json({status:'SUCCESS', id:users.length});
 })



});














app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


