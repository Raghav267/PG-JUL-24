const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/movies-july-batch')
    .then(() => console.log("DB COnneccted"))
    .catch((err) => console.log("Error" + err))

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    rating: Number,
    isWatched: Boolean
});

const Moviee = mongoose.model("Movie", movieSchema);
// console.log(Moviee);
const Noman = new Moviee({ name: "Something", year: 2015, });
Noman.save();
