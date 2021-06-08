var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true })

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', () => {
    console.log('THE CONNECTION IS ESTABLISHED')
})


var userSchema = new mongoose.Schema({
    name: String
})
// the above initiates the Schema. A schema is a function which is used to define which type of data we are storing

userSchema.methods.output = function () {
    var wholestring = 'The name is ' + this.name
    console.log(wholestring)
}
// the output function here holds the responsibilty of analyszing the strings in the object and printing it accordingly. the output is not an inbuilt function. it the name of the function that is given by us. and the userSchema addresses the variable which stores the schema data types.

var user = mongoose.model('users', userSchema)
// this compiles all the data that is stored with Schema.
// here the 'users' is the name of the collections which is stored according to the userSchema which defines which variable stores which type of data.

var user1 = new user({ name: 'Lakshya' })
// the above is an object that defines different values 
// here user is the variable which stores the mongoose.model Schema which tells that the object has String data type

console.log(user1.name)
// this will print the object name in the user1 variable 

user1.output()
// this carry out the output function which corresponds to the Schema Methods. It will print the 'name' variable. 

// user1.save((err, user1) => {
//     user1.output()
//     if (err) return console.error(err)
// })
// this will save the data in the collections corresponding to the mongoose.model. In this case 'users'

user.find({ name: 'Lakshya' }, function (err, users) {
    if (err) return console.error(err)
    console.log(users)
} ) //here the user.find is corresponding to the mongoose.collection where the 'users' collection is made. 