const express = require("express");
const app=express()
const mysql=require('mysql');
const cors=require('cors');

app.use(cors())
app.use(express.json());


const db=mysql.createPool({
    name:'root',
    host:'localhost',
    password:'password',
    database:'employeeSystem',
})

app.post('/create',(req,res)=>{
    console.log(req.body);
    const name=req.body.name
    const number=req.body.number

    db.query("INSERT INTO employees(name,number) VALUES (?,?)",
    [name, number],
    (err,result)=>{
        if (err) {
            console.log(err);
        }else{
            res.send('Contact added successfully')
        }
    }
    
    );
})


app.post('/read',(res)=>{
    db.query("select * from employees",
    (err,result)=>{
        if (err) {
            console.log(err);
        }else{
            res.send('Successfully inserted',res)
        }
    }
    );
})


app.listen(3001,()=>{
    console.log("hello welcome to node")
})


// var express = require('express');
// var router = express.Router();
// var app = express();

// app.use(function(req, res, next) {
//     console.log('request', req.url, req.body, req.method);
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-token");
//     if(req.method === 'OPTIONS') {
//         res.end();
//     }
//     else {
//         next();
//     }
// });

// router.get('/hello', function(req, res, next) {
//     res.end('hello world')
// });

// app.use('/router', router)

// app.listen(8081, () => {
//   console.log("hello welcome to node");
// });