function average (arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}

module.exports = {
    average: average ,
    Name : "CollaKnow",
    Type : "Social Network"
}
// here module.exports is used to export a function. The function can then be included in other files locally and be used as a module. In this case, multiple modules are exported as an object

module.exports.creator = "Lakshya Pratap Monga"

// single object can also be exported as a module by this syntax. here the module.exports is the syntax for exporting and teh creator is the name of the object. 

