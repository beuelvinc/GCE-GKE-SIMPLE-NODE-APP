import express from 'express';
import { json } from 'body-parser';

const app = express()

app.get("/api/users/currentuser",(req,res)=>{
    res.send("Hi there")
})

app.use(json())
app.listen(3000,()=>{
    console.log("listening 3000")
})