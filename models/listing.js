const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
       default: "https://via.placeholder.com/150",
        set: (url) => url === "" ? "https://via.placeholder.com/150" : url
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    location: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Listing", listingSchema);