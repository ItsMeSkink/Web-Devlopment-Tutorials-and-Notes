const http = require("http")
const fs = require("fs")

let home = fs.readFileSync("HtmlFiles/home.html")
let halloffame = fs.readFileSync("HtmlFiles/halloffame.html")
let about = fs.readFileSync("HtmlFiles/about.html")
// this syntax reads the designated file name. fs is the module and readFileSync is the function
let aspects = fs.readFileSync("HtmlFiles/aspects.html")

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" })
    // res stands for the RESPONSE. 
    // res.writeHead is for defining which type of file are we reading. 
    // 200 is the STATUSCODE which means Success for accessing
    // "Content-Type" means the content type is being defined
    // "text/html" -> text/html is for defining that the file that is being read is html. it can be normal text file, css, js or anything

    url = req.url
    // req is REQUEST and url is URL. This means to request the url. 

    if (url == "/") {
        res.end(home)
    }

    else if (url == "/about") {
        res.end(about)
    }

    else if (url == "/halloffame") {
        res.end(halloffame)
    }

    else if (url == "/aspects") {
        res.end(aspects)
    }
    else {
        res.statusCode = 404;
        res.end("This page is not found")
    }

    // here res.end(__) is to forward you to a particular page in the local folder. 
})

server.listen(80, "127.0.0.1", () => {
    console.log("Server 80 is up and running")
})
// the server is running at port 80 locally on IP address 127.0.0.1.
// 127.0.0.1 is for local IP Address

