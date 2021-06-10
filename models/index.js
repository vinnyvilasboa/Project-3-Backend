require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
});

const db = mongoose.connection;

// Set up event for db to print connection
db.once('open', () => {
    console.log(`Connect to MongoDB at ${db.host}:${db.port}`);
});

db.on('error', (error) => {
    console.log(`Database error`, error);
});

// Import all of your models
const Astro = require('./Astro')
const Crew = require('./Crew');
const Dragon = require('./Dragon');
const Rocket = require('./Rocket');
<<<<<<< HEAD
// const Starlink = require('./Starlink');

=======
const User = require('./User');
>>>>>>> 5f337f67068bac1d4a1195542f19d61b99e328b3

// export all the models from this file
module.exports = {
    Astro,
    Crew,
    Dragon,
    Rocket,
    User
}