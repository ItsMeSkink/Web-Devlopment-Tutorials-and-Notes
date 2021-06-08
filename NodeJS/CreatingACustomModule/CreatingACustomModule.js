const mod = require ("./module")
// this will call all the functions that are being exported from the module.js file

console.log (mod.creator)
console.log (mod.Name)
console.log (mod.average ([10,20]))

// here the mod is the variable that stores the module local module. after the dot, the object function that is being processed in the module.js file is manifested here. like the creator was defined as "Lakshya Pratap Monga" and Name was defined as "CollaKnow".
// in the average case, first it demands the numeric array. Then it is processed in the module file and then it outputs the average. 