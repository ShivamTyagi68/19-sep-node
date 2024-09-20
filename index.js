const express=require('express');
const path=require('path');
const router = require('./routes/student')
const connect = require('./connection')
const app=express();
connect()
app.use(router)

app.set('view engine','ejs');
app.set('views',path.resolve('./views'));

app.listen(4000,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("server is running on 4000")
    }
})