const express = require("express")
const path = require("path"); 
const app = express()
const fs = require("fs");
port = 80;

// app.use('/static', express.static('PugFiles')) // this is not much needed in form submissions
app.use(express.urlencoded()) // this is a junction between the PUG file FORM and this JS file. it would help to recieve the values from the pug file. we are using a url which transmits HTML encoded data, that's why we use urlencoded()

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'PugFiles'))


app.get("/", (req, res) => {

    const title = "This is the Social Media of Knowledge"

    const manifestget = { title }
    // res.status(200).render('PugFileHtml.pug', manifestget)
    res.render('PugFileHtml.pug')
})

// TO GET THE OUTPUT FOR THE HTML FORM ON THE URL, WE HAVE TO MENTION THE NAME OF THE PARAMETER THAT IS BEING INPUTTED BY THE USER. IT IS MENTIONED IN THE TAG ONLY

app.post("/", (req, res) => {
    // this whole (app.post) is to recieve the values of the form. in the pug FORM, it is specified that when the button in the form with action ('/'), the values would be (POST)ed in the JS file.
    const message = "Your form has been submitted"
    const manifestpost = { message }
    res.status(200).render('PugFileHtml.pug', manifestpost) // this would display the same PUG file along with one modification. it would show FORM SUBMITTED when we POST ('/') after clicking the button in the form. 

    console.log(req.body)
    // this would display all the read variables from the form in the console log. req here means request and body here means the read the whole data of the form. 

    console.log("This one is seperated parameters")

    console.log("Your First Name is" + req.body.FirstName)
    console.log("Your Last Name is" + req.body.LastName)
    console.log("Your Username is" + req.body.UserName)
    console.log("Your Email is" + req.body.Email)
    console.log("Your Age is" + req.body.Age)
    // here req.body.___ refers to reading a specific variable in the form. 

    const OutputParameters = `Your credentials are
    ${req.body.FirstName}, ${req.body.LastName}, ${req.body.UserName}, ${req.body.Email}, ${req.body.Age}
    `

    fs.writeFileSync("ReadFormFile.txt", OutputParameters) 
    // this will create a new file when the variables are read and put it in a new text file where the form variables are stored. 
})
// this is to read the post function of the HTML form. 


app.get('/reset', (req, res) => {
    res.render('PugFileHtml.pug')
    //  this would remove the modification and just render the normal pugfile with no modifications (FORM SUBMITTED would be gone)
})

app.listen(port, () => {
    console.log("the port is up and runnning at port 80")
})