//express is used to start the server at some port
const express=require("express");
const app=express(); 
//process.env is used to get the secrete code from .env
require("dotenv").config()
const PORT=process.env.PORT;

//cors config
const cors=require("cors");
app.use(cors());

const bodyParser=require("body-parser");
app.use(bodyParser.json());

app.get("/get", (request,response)=>{
    response.send("Hi i am the server");
});

app.post("/post", (request,response)=>{
    const {name,number,email }=request.body;
     console.log("<><>",name,number,email);
    response.send("Data is successfully registered");
});

//port is running on the soon
app.listen(PORT,()=>{
    console.log(`The server is listen on the port:${PORT}`)});