require('dotenv').config(); // loads .env file contents into process.env object

const express = require("express");
const cors = require("cors");
const db = require("./src/models");

const env = require('./config/config');
require('./helpers/env-check');

//api routes
const initRoutes = require("./src/routes/image.routes");
global.__basedir = __dirname;

// const bodyParser = require("body-parser");
const app = express(); // this will cancel the startup if necessary env variables are missing...

//for upload api
app.use(express.urlencoded({ extended: true }));
initRoutes(app);

var corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions));
//parse requests of content-type - application/json

app.use(express.json());
//parse requests of content-type application/ x-www-form-urlencoded

app.use(express.urlencoded({ extended: true }));
//simple route



const Role = db.role;

//for production, use sync() without parameters;
// db.sequelize.sync();

// for development:
db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and Resync Db');
    initial();
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to migr-ai-tion backend" });
});

// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

// set port, listen for requests

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})

function initial() {
    Role.create({
        id: 1,
        name: "user"
    });

    Role.create({
        id: 2,
        name: "admin"
    });


}