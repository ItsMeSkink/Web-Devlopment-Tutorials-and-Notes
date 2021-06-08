// FIRST THE MONGOD CONNECTION HAS TO BE ESTABLISHED IN THE TERMINAL BY WRITTING "mongod" IN THE TERMINAL. OR IN THE MONGODB COMPASS APPLICATION (INSTALLED ON THE COMPUTER)

var mongoose = require("mongoose")
// this is to include the mongoose module 
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology:true })
// this is to connect the mongoose module to the activity in the mongodb database. here the 'test' after the local host is the name of the collection




var db = mongoose.connection
console.log('connection has been establishedb')
// here the connection is initiated 
db.on('error', console.error.bind(console, 'connection error:'))
// if any error occurs, this would be executed
// this is not much necessary when we are (testing/prototyping/making) files locally

db.once('open', function() {
    console.log ("we are connected")
})
// this would be executed when there is no error and the connection is successfully established

