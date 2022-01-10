const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    director: {
        type: String,
        default: "Not specified"
    },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;