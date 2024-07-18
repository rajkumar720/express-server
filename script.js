const express=require('express')
const app=express();
app.use(express.static('public'));
app.listen(2000,'localhost',()=>{
    console.log('the server is start');
});