// Blocking = Synchornous
// the code would be executed line by line. It gurantees the execution of the whole code
// it will not let the code go further untill and unless this is fulfilled

// Non-Blocking = Asynchronous
// the code would not be executed line by line (not guaranteed). Callbackes would be fired if not executed

const fs = require ("fs")

fs.readFile ("TextFiles/textfile1.txt", "utf-8", (err,data) => {
    console.log (data)
    // here data is the CONTENT THAT IS READ 
    console.log (err)
    // here err is the ERROR
    // this is an asynchronous function which needs a callback to be fulfilled. it will run if no callback is mentioned.
})
console.log ("Text 1") // first this would pop-up and then the readFile would pop-up because the reading for the file would take time. Before that this would be popped-up

let textfile2 = fs.readFileSync ("TextFiles/textfile2.txt", "utf-8")
// this is Synchronous, no need of callback and if error occured, the code would not stop. 
console.log (textfile2)
