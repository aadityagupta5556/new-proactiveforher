const express =require('express')
const bodyparser=require('body-parser')
const mongoose =require('mongoose')
const route =require('./route/route')
const app=express()

app.use(bodyparser.json())
app.use(express.static('public'))
app.use(bodyparser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb+srv://aadityagupta:locked5556@cluster0.l6eyoyt.mongodb.net/aadi1845?retryWrites=true&w=majority',{

useNewUrlParser:true
})
.then(()=>console.log("mongoDB connected successfully"))
.catch(err=>console.log(err))

app.use('/', route)

app.listen(process.env.PORT||3000, ()=>{
    console.log("app is running on port " + (process.env.PORT || 3000));
})

