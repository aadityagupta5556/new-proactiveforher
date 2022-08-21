const registerModel = require('../Models/registerModel')


const registerUser = async function (req, res) {

    try {

        let data = req.body

        const save = await registerModel.create(data);
        return res.redirect('login.html')
    }
    catch (error) {
         res.status(500).send({ status: false, message: error.message })
         console.log(error.message)
    }
}
module.exports = {

    registerUser
}