const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Note = require('./models/Note');


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const mongoDbPath = "mongodb+srv://batufidan:test123@cluster0.qx40lgl.mongodb.net/notesdb"
mongoose.connect(mongoDbPath).then(function () {
    //App routes
    app.get("/", function (req, res) {
        const response = {message : "API Works!"};
        res.json(response);
    });

    const noteRouter = require('./routes/Note');
    app.use("/notes", noteRouter);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("Server started : " + PORT )
});