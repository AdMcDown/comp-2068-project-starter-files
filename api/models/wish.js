//importing mongoose library
const mongoose = require('mongoose');
const WishListSchema = new mongoose.Schema({
    creator: {
        type: String,
        required: true
    },
    item: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: false
    },
    websiteLink: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});
module.exports = mongoose.model('Wish', WishListSchema);