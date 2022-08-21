const mongoose=require('mongoose')

const registerSchema =new mongoose.Schema({

    name: '',
    number: '',
    email: '',
    password:''



}, {timestamps:true}

)

module.exports= mongoose.model('register', registerSchema  )