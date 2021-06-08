// to query something and filter out the data which fulfills the conditions, the following has to be done
// Searching for Data in MongoDB

db.items.find({ variable: defination })
// if any data that fulfills the defination of the particular variable, those items would be displayed
// e.g. db.items.find({relation: "brother"})
// e.g. db.items.find({age:15})

// the db.items.find is the syntax. () is the parenthesis where the conditions would be defined, {} is the curly brackets that defines that the conditions are in the form of objects.

//
db.items.find({ age: { $gte: 13 } })
// this will output the datas which fulfill that the number is greater than or equal to the demanded. In this case 13.

db.items.find({ age: { $gt: 13 } })
// this will output the datas which fulfill that the number is only greater than the demanded. in this case also 13

db.items.find({ age: { $lte: 14 } })
// this would be for less than or equal to 

db.items.find({ age: { $lt: 14 } })
// this would be only for less than

// for multiple
db.items.find({ variable: defination, variable2: defination2 })

// IN ALL THE ABOVE CASES, ALL THE CONDITIONS THAT ARE DEFINED WOULD BE APPLIED. There would not be any OR condition


db.items.find({ $or: [{ variable: defination }] })
$or // is the OR condition that defines if either of the conditions are being fulfilled, the data would be shown accordingly
// in this the () is parenthesis where the objects are being included. {} is for objects. [] is for array. [{}] is for objects defined in array.

db.items.find(
    {
        $or: [
            { age: { $lte: 20 } },
            { age: { $gte: 10 } }
        ] // we have to define the objects coming under $or in an array
    }
)
db.items.find({ $or: [{ age: 15 }, { age: 7 }] })


