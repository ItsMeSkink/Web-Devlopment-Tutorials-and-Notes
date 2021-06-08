const http = require ("http")
const fs = require("fs")

let HTMLFile = fs.readFileSync ("HtmlFiles/ServingHtmlFilesUsingNodejs.html", "utf-8")

const server = http.createServer ((req,res) => {
    res.writeHead (200, {"Content-Type" : "text/html"} )
    res.end(HTMLFile)
})


server.listen (80, "127.0.0.1", () => {
    console.log ("The server is up and running at port 80")
})