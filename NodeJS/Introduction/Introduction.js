const http = require ("http")
// this imports the http public module

const hostname = "127.0.0.1"
// local IP address where the server would be addressed
const port = 80
// port over which this file would be sereved
const server = http.createServer((req,res) => {
    res.statusCode = 200
    // success STATUSCODE
    res.setHeader ("Content-Type" , "text/html")
    // addressing that the content type is html
    res.end (`
    <h1>This is heading 1 </h1>
    `)
    // the above string under the `` would be the html code. the output of the html code would be displyed on the IP address in chrome
})

server.listen(port, hostname, () => {
    console.log (`Server is up and running at http://${hostname}:${port}`)
})

// here the server is listening to IP address and the port and creating an output of the above code.


