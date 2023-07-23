const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
let users=[];

router.get('/',(req,res)=>{
    console.log(user);
    
    res.send("from router index.js it is home page");
});

router.get('/users',(req,res)=>{
    res.send(users);
});

router.post('/',(req,res)=>{
    const user = req.body; 
    users.push({...user,id:uuidv4()});
    console.log(users);
    res.send(`user with name ${user.firstName} is added`);
});

router.get('/:id',(req,res)=>{
    const {id}=req.params;
    const founduser = users.find((user)=>user.id ===id);
    res.send(founduser);
});

router.delete('/:id',(req,res)=>{
    const{id}=req.params;
    users=users.filter((user)=>user.id!==id);
    res.send("deleted given id");
});

router.patch('/:id',(req,res)=>{
    const {id} = req.params;
    let user = users.find((user)=> user.id===id);
    const {firstName,lastName,age}=req.body;

    if(firstName) user.firstName=firstName;
    if(lastName) user.lastName=lastName;
    if(age) user.age=age;
    
    res.send(`user with ${id} is updated`);

});
module.exports = router;