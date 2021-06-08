const express = require("express")
const port = 80;
const app = express();

app.get("/", (req, res) => {
    res.send("The Aim is to spread more knowledge")
});

app.get("/masthead", (req, res) => {
    res.send("This was created by Lakshya Pratap Monga")
})

app.post("/masthead", (req, res) => {
    res.send("This was created in the year 2021")
})

app.get("/aspects", (req, res) => {
    res.status(200).send("Anyone can post anyting knowledgeable here")
})

app.get("/error", (req, res) => {
    res.status(404).send("Bitch, an error has occured")
})

app.listen(port, () => {
    console.log(`The application has started now on port ${port}`)
});



// we can test this in the postman app which is installed in my computer. We have to type "localhost:port_number"
// this will create an web application
// in the case of port 80, we need not to mention the port number but if it is anything else, we have to mention it. 
// we can also test this in chrome but we could not get any other functions which can be accessed through the postman app.
// different pages can be access by "localhost:port_number/page_name". It has to be set on "GET"

//  THIS IS USED TO SIMPLIFY THE PAGE SELECTION which is the REPLACEMENT of the server that we created with http.createServer

// we can also specify which request function we have to call which can be GET/POST  etc. 
// to mention the status code, we have to write res.status(status_code).send ("STRING")