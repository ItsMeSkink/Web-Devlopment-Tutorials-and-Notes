const express = require ("express");
const app = express()
const port = 80;

// SERVING STATIC FILES
app.use ("/static", express.static("static"))
// here app.use is TO USE
// "/static" is for to serve the static files
// express.static is to read the folder
// ("static") is the name of the folder

//   TO TEST THIS WE USE, "localhost/folder_name/file_name" on browser.
//  the file would be the file that would be read. in this case staticfile1.js in static folder. 

// static files would just display the code not run it





app.listen(port, () => {
    console.log (`The server is up and running on ${port} port.`)
})

