const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Hello from Docker</h1>")
});

app.listen(3003,()=>{
    console.log("app is running on port 3003");
})