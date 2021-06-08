const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const ejs = require('ejs')
const mongoose = require('mongoose')
const http = require('http')
const bodyparser = require('body-parser')
const multer = require('multer')
const router = express.Router()
const dotenv = require('dotenv')
const cors = require('cors')
const morgan = require('morgan')

dotenv.config()


app.use(express.json())
// app.use(express.urlencoded())
app.use(morgan('tiny'))
app.use(cors())


app.listen(80, () => {
    console.log('THE PORT IS UP AND RUNNING')
})

const DataBaseName = 'SignUp'
const CollectionName1 = 'SignUp'

mongoose.connect('mongodb://localhost/' + DataBaseName, {
    useNewUrlParser: true,
    useCreateIndex: true
})

const db = mongoose.connection
db.once('open', () => {
    console.dir('THE DATABASE IS SUCCESSFULLY CONNECTED')
})

const Schema1 = new mongoose.Schema({
    firstName: String,
    lastName: String
})


const signup = mongoose.model(CollectionName1, Schema1)


app.post('/', (req, res) => {
    console.log(req.body)

    const SignUpUser = new signup({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })

    console.log(SignUpUser)

    SignUpUser.save().then(data => {
        res.json(data)
    })
        .catch(error => {
            res.json(error)
        })
})

app.get('/data', (req, res) => {
    const data = [
        {
            firstName: 'Lakshya',
            lastName : 'Monga'
        },
        {
            firstName: 'Tanmay',
            lastName: 'Garg'
        },
        {
            firstName: 'Shourya',
            lastName: 'Sethi'
        },
        {
            firstName: 'Manan',
            lastName: 'Sethi'
        }
    ]


    res.send(data)
    res.end()
})