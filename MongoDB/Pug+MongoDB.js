const express = require("express")
const path = require("path");
const app = express()
const fs = require("fs");
const bodyparser = require('body-parser')
port = 80;

app.use(express.urlencoded())
// app.use('static', express.static('PugFiles'))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/'))

app.get("/", (req, res) => {
    res.status(200).render('Pug+MongoDB-Form.pug')
})

//______________________________Mongoose Set Up_____________________________________________________________ {

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/localUsers', { useNewUrlParser: true, useUnifiedTopology: true })

var db = mongoose.connection

db.once('open', () => {
    console.log('THE DATABASE CONNECTION HAS BEEN MADE')
})

const Schema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    Email: String,
    Age: Number,
    Aspects: String,
})

const user = mongoose.model('users', Schema)

//___________________________Mongoose Set Up End_____________________________________________________________}

app.post('/submit', (req, res) => {

    const newUser = new user(req.body) // this would make a new item in the collection 'users' of database 'localUsers
    newUser.save().then(() => {

        // res.send('the form has been submitted')

        let manifest = {
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Email: req.body.Email,
            Aspects: req.body.Aspects,
            Age: Number(req.body.Age)
        }

        res.render('Pug+MongoDB-Results.pug', manifest)

        let JSONData = `
    "OUTPUT" {
        "FirstName" : "${manifest.FirstName}",
        "LastName" : "${manifest.LastName}",
        "Email" : "${manifest.Email}",
        "Age" :  "${manifest.Age}",
        "Aspects": ${manifest.Aspects}
    }`

        fs.writeFileSync('Pug+MongoDB-Results.json', JSONData)

        //______________________MONGOOSE______________________________________________________________________


        console.log('______________________')
    })



})



app.listen(port, () => {
    console.log("THE PORT IS UP AND RUNNNING" +
        "")

})

