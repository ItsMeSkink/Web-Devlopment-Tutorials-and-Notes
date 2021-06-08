//modules are external codes that are used to do functions in out code. We can say that a module is pre-written code that is  included in local file

const fs = require("fs")

let text = fs.readFileSync("TextFiles/text1.txt", "utf-8")
console.log (text)
text = text.replace("This", "That")

console.log (text)

fs.writeFileSync("TextFiles/text2.txt", text)
// we can also create files by using this. 
