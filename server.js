const express=require('express');
const mongoose=require('mongoose');
const path=require('path');
const port =5670;
const app=express();
app.use(express.static(__dirname))

const uri = 'mongodb+srv://younustheman:younus.ms123@cluster0.xon7a.mongodb.net/employe?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(uri).then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'login.html'))
})
app.listen(port,()=>
{
    console.log("Server started")
}) 
//const uri = 'mongodb+srv://younustheman:younus.ms123@cluster0.xon7a.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0';
