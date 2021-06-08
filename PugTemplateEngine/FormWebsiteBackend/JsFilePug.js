const express = require("express")
const app = express()
const path = require("path")


port = 80;

// USING PUG TEMPLATE ENGINE
app.set("view engine", "pug")


// SET THE VIEWS DIRECTORY
app.set("views", path.join(__dirname, 'PugFiles'))
// use '' to name the directory instead of ""
// app.set means which file/folder to modify from this code
// path is a module that lets use navigate around the local directories
// path.join is to include and chosing which file/folder to modify
// __dirname refers to the name of the directory/folder
// PugFiles here is the name of the folder/directory



app.get("/PugFilePug", (req, res) => {
    res.status(200).render("PugFilePug", { title: "Defining Title in Js File", message : " This is how we make templates in the pug file and define the variables in the Js Files." })
})
// here app.get is to read the file. 
// req,res is for request and response
// status is for STATUSCODE
//  render is to define the variables
// title and message here are variables which are defined in this JS file and displayed in the PUG file. 



app.listen(port, () => [
    console.log(`the server is running at ${port}`)
])