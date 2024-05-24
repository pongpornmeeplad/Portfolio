const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const EmployeeModel = require('./models/Employee')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/emoployee")

app.post("/login" , async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await EmployeeModel.findOne({email: email});
        if(user) {
            if(user.password === password){
                res.json("Success");
            } else {
                res.json("The password is incorrect");
            }
        } else {
            res.json("No record existed");
        }
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).json("Internal Server Error");
    }
});


app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running")

})