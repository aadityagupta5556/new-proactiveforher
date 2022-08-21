const registerModel = require('../Models/registerModel')


const loginUser = async function (req, res) {

    try {

        let data = req.body
        let email=data.email
        let password=data.password

        const save = await registerModel.findOne({email:email , password:password});
        return res.redirect('successfull.html')
    }
    catch (error) {
         res.status(500).send({ status: false, message: error.message })
         console.log(error.message)
    }
}
module.exports = {

    loginUser
}