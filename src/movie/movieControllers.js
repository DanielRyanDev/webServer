const Movie = require("./movieModel");

exports.addMovie = async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        res.status(201).send({message: "Success!", movie}); 
        // movie on it's own is the same as movie: movie; insofar as both obj and var are the same name, shorthand will automatically declare as key value pair.
    } catch (error) {
        console.log(error);
        res.status(500).send({message: "Check server logs."});
    }
};

// exports.findMovie = async (req, res) => {
//     try {
//         const movie = await Movie.listIndexes(req.body);
//         res.status(201).get({message: "Success!", movie}); 
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({message: "Check server logs."});
//     }
// };

exports.findMovie = async (req, res) => {
    try {
        const movie = await Movie.find({});
        res.status(201).get({message: "Success!", movie}); 
    } catch (error) {
        console.log(error);
        res.status(500).send({ movie });
    }
};

exports.updateMovie = async (req, res) => {
    try {
        const movie = await Movie.updateOne(req.body);
        res.status(201).send({message: "Success!", movie}); 
    } catch (error) {
        console.log(error);
        res.status(500).send({message: "Check server logs."});
    }
};

exports.deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.deleteOne(req.body);
        res.status(201).send({message: "Success!", movie}); 
    } catch (error) {
        console.log(error);
        res.status(500).send({message: "Check server logs."});
    }
};