const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const pug = require('pug')
const mongoose = require('mongoose')
const http = require('http')
const bodyparser = require('body-parser')
const multer = require('multer') // this is the module that enables us to store large files such as images in this case

app.use(express.static(__dirname + '. /')) // this is the static middleware

const DataBaseName = 'imagesDataBase'
const CollectionName1 = 'images'

mongoose.connect('mongodb://localhost/' + DataBaseName, {
    useNewUrlParser: true,
    useCreateIndex: true
})

const db = mongoose.connection
db.once('open', () => {
    console.dir('THE DATABASE IS SUCCESSFULLY CONNECTED')
})

const Schema1 = new mongoose.Schema({
    image: String,
})


const images = mongoose.model(CollectionName1, Schema1)


//___________________________________________________________________________________________
app.listen(800, () => {
    console.log('THE PORT IS UP AND RUNNING')
})


const Storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
}) // this is the variable that would enable us to store the files with respective names and in particular folders respectively.

const upload = multer({
    storage: Storage
}).single('ImageUpload') // this would set the directory from where the images would come from.

app.post('/imageupload', upload, (req, res) => {
    // the upload function would carry out the process of creating the new file.
    const success = req.file.filename + "is the name of the file uploaded successfully"
    console.log(success)
    
    const newDBImage = new images({
        image: req.file.filename
    })
    
    newDBImage.save()
    console.log('THE IMAGE HAS BEEN UPLOADED')
    
    images.find({}, (err, CollectionName) => {
        console.log(CollectionName[CollectionName.length -1].image)
        fs.writeFileSync('./preview.html', `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        </head>
        <body>
        ${success}
        
        <img src="./uploads/${CollectionName[CollectionName.length -1].image}" alt="">
        </body>
        </html>
        `)
    })
    
    res.sendFile('/preview.html', {root: __dirname})
})


app.get('/', (req, res) => {
    res.sendFile('/upload.html', { root: __dirname })
})


