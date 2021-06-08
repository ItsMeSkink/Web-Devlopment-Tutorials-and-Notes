// we can make another collection by using this-> db.new_collection_name.insertOne({variable1:defination1}). this will lead to another collection with a new data set

// THIS IS HOW TO UPDATE EXISTING DATA IN THE DATABASE
db.items.updateOne({variable1: existing_defination}, {$set: {variable2: new_defination}})
// this updates a single variable in the database
// ${set} refers to the change in existing variable and to set it to the followed {} defination
db.items.updateMany({variable1: existing_defination}, {$set:{variable2:new_defination, variable3:new_defination}})

