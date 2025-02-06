import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';
import mysql from 'mysql2'

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.send('Hello World!');
})

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database: "test"
})

db.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("connected");
    }
})

app.post('/users',(req,res)=>{
    const {id,name}=req.body;
    
    const query='insert into student values(?,?)';
    db.query(query,[id,name],(err,result)=>{
        if(err){
            console.log(err);
            return res.send(400);
        }else{
            console.log(result);
            return res.send(200);
        }
    })
})

app.listen(8000,()=>{
    console.log("backend is running port 8000");
});