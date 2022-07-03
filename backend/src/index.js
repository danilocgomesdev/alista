require('dotenv').config();
const cors = require('cors')
const mongoose = require('mongoose'); 
const express = require('express');
const routes = require('./routes');
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp", "uploads")));
app.use(routes);
mongoose.connect('mongodb+srv://alistacomercial:telefonica@cluster0-hqyvh.mongodb.net/alistaporangatu?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
mongoose.Promise = global.Promise;


app.listen(3333);