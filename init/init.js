const mongoose = require('mongoose');
const Listing = require('../models/listing');
const initData = require('./data');

require("dotenv").config({path: "../.env"});
// create database connection
 const main = async () => {
    await mongoose.connect(process.env.MONGO_URL);
}

main().then(()=>{
    console.log("DB connected Successfully")
})
.catch((err)=>
console.log(err)
);


// delete existing listings and insert sample data
const seedDB = async () => {
    try {
        await Listing.deleteMany({});
        console.log("Existing listings deleted successfully.");
        await Listing.insertMany(initData.data);
        console.log("Sample listings inserted successfully.");
        console.log(initData.data);
    } catch (err) {
        console.error("Error seeding the database:", err);
    }   
}

seedDB().then(()=>{
    console.log("Database seeding completed.");
    mongoose.connection.close();
}).catch((err)=>{
    console.error("Error during database seeding:", err);
    mongoose.connection.close();
});