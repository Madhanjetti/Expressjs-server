const express=require('express');
const app=express();
const PORT=4005;
const HOSTNAME='localhost';
app.get('/',(req,res)=>{
    res.send("<h2>Creating server using Express js</h2>");
})
app.get('/about',(req,res)=>{
    res.send('<h1 style:"color:red;">About page</h1>');
})
app.get('/contact',(req,res)=>{
    res.send("contact us");
})

app.listen(PORT,()=>{
    console.log(`Server is running at ${HOSTNAME}:${PORT}`)
})