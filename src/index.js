require("./db/connection");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const movieRouter = require("./movie/movieRoutes");
const userRouter = require("./user/userRoutes");

app.use(express.json());
app.use(cors());
app.use(movieRouter);
app.use(userRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// app.get('/', (req, res) => {
//     res.send("Hello World!")
// })

// app.post('/', (req, res) => {
//     res.send("Got a POST request")
// })

// app.put('/user', (req, res) => {
//     res.send("Got a PUT request at /user")
// })

// app.delete('/user', (req, res) => {
//     res.send("Got a DELETE request at /user")
// })



// app.use(express.static('static'))