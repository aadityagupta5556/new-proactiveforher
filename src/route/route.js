const {registerUser} = require('../controllers/registerController')
const express=require('express')
const { loginUser } = require('../controllers/loginController')
const router =express.Router()


router.get('/', function(req,res){
    res.set({
        "Allow-access-Allow-Origin":'*'
    })
    return res.redirect('main.html');
})

router.post('/register', registerUser)

router.post('/login', loginUser)

module.exports =router


