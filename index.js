const express = require("express")
const app = express()
const mongoose = require("mongoose");
const Listing = require("./models/listing")
const path = require('path');
const methodOverride = require("method-override")
const ejsMate = require("ejs-mate")

require('dotenv').config();

const PORT = process.env.PORT || 8080;


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))
app.engine("ejs", ejsMate)

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

// Index route
app.get("/listings", async (req, res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings })
})

// New route
app.get("/listings/new", (req, res)=>{
    res.render("listings/new.ejs");
})

// Show route
app.get("/listings/:id", async (req, res)=>{
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing })
})

// Create route
app.post("/listings", async (req, res)=>{
    const { title, description, image, price, location, country } = req.body;
    const newListing = new Listing({ title, description, image, price, location, country });
    await newListing.save();
    // 🚀 another way to do the same thing is by directly passing the req.body.listing object to the new Listing constructor
    // let listing  = req.body.listing;
    // const newListing = new Listing(req.body.listing);
    // await newListing .save();
    res.redirect("/listings");
})

// Edit route
app.get("/listings/:id/edit", async (req, res) => {
     let { id } = req.params;
    const listing = await Listing.findById(id);
      res.render("listings/edit.ejs", { listing })
})

// Update route
app.put("/listings/:id", async (req, res)=>{
    let { id } = req.params;
    const { title, description, image, price, location, country } = req.body;

    await Listing.findByIdAndUpdate(id, {
        title,
        description,
        image,
        price,
        location,
        country
    });

    res.redirect(`/listings/${id}`);
});
   
// Delete route
app.delete("/listings/:id", async (req, res)=>{
     let { id } = req.params;
     const deletedListing = await Listing.findByIdAndDelete(id);
     console.log(deletedListing)
     res.redirect("/listings")
})

// activate app
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

// default route
app.get('/', (req, res)=>{
    res.send(`<h1>Welcome to Home page</h1>`)
});
