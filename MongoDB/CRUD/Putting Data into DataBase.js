// to initiate the database, first we have to write "mongod" in the powershell so that the database can be chosen and data can be stored in it


// the below is in the second ppowershell window/terminal
// this is how we create a local database locally
// use __Name_of_the_DataBase__  //
// e.g. use collaknow

db.items.insertOne(
    {name : "Lakshya", surname: "Pratap Monga", age : 15}
    )
// this will insert the variables and the data stored in it in the data base
// this is called a collection
// THIS IS FOR A SINGLE COLLECTION

db.items.insertMany([{name: "Manan", surname: "Sethi", age: 15.5, relation: 'brother'}, {name : "Shourya", surname : 'Sethi', age: '17', relation: 'brother'}])

// show dbs //
// this is to display the active databases

db.items.find()
// this would display what data has been inserted in the database

// to test that whether the data in the database has been inserted by use->
// Ctrl + C on the first terminal where the "mongod" is running
// restart the database by typing "mongod" again there
// 
// exit the mongo active database in the second terminal 
// restart that again
// show dbs
// use _database_name_
// db.items.find()

// if the previosly entered database is displayed, the data has been inserted successfully

db.items.insertMany([{ name: "Tanmay", surname: "Garg", age: 13, relation: "younger brother" }, { name: "Aastha", surname: "Garg", age: "18.5", relation: "elder sister" }, { name: "Munish", surname: "Garg Monga", age: 42.6, relation: "mother" }, { name: "Pawan", surname: "Kumar Monga", age: 46.5, relation: "father" }])


// CRUD STANDS FOR -> create, read, update, delete