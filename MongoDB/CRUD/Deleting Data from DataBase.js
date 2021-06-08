
db.items.find({relation: "brother"}) //this is to search any data that has relation defined as brother. 



// THIS IS TO DELETE DATA FROM THE DATABASE 
// it is similar to searching data in the database 


db.items.deleteOne({ variable: defination })
// here the item/object which agree the conditions in the parenthesis would be deleted
// this is for single item
// e.g. db.items.delete({name: "Arjun"})


db.items.deleteMany({variable1:defiantion1}, {variable2:defiantion2})



// THE DATA IN THE LOCAL DATABASE WOULD REMAIN STORED EVEN AFTER THE COMPUTER IS SHUT DOWN