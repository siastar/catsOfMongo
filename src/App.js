//https://www.jenniferbland.com/saving-data-to-mongodb-database-from-node-js-application-tutorial/


// mongoose.connect('mongodb://localhost:27017/Cats'); // establishing the connection
// const db = mongoose.connection;
//    db .once('open', () => console.log('Connection established'))
//    db.on('error', (error) => { console.log('Warning : ' + error);});

// console.log('database is:', db);

// beforeEach((done) => {
//     mongoose.connection.collections.FeralCats.drop(() => {
//         done();
//     }); //clean database before testing
// });


const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose'); // requiring our package
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Cats'); // establishing the connection

const db = mongoose.connection;
db.once('open', () => console.log('Connection established'))
db.on('error', (error) => { console.log('Warning : ' + error);});

const app = express();
const port= 3003;

const catSchema = new mongoose.Schema({
    id: Number,
    catName: String,
    catType: String,
    catIsFriendly: Boolean
});

const User = mongoose.model('gardencats', catSchema)
// 'gardencats' is the name of the collection in the running  MongoDB
// in this examble is 'mongodb://localhost:27017/Cats'
// if running mongoDB has no collection called 'gardencats' it will create an empty one
// in order to store the new cat in.
// if the 'gardencats' collection already exists the new cat will be added
//
// it seems that if you use uppercases in the collection name this will be ignored
// with unwanted consequences:
// if tehre is a collection called GardenCats and into the mongoose.model method I user
//
// const User = mongoose.model('GardenCats', catSchema)
//
// in the mongoDB running DB will be created a new collection called gardencats and the
// existing one, GardenCats will be ignored so for the moment let assume that collections
// must have only lowercase names, then we will see.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//   app.use()
//      Mounts the specified middleware function or functions at
//      the specified path: the middleware function is executed when
//      the base of the requested path matches path.


app.listen(port, () => {
    console.log('terminal message: server listening on port:', port);
});

app.get('/', (req , res) => {
  //res.send('browser message:  reached');
    res.sendFile(__dirname + "/index.html");
});


app.post('/addcat', (req, res) => {
    
    const anotherCat = new User(req.body);
    anotherCat.save()
     .then(item => {
            res.send("cat hosted!");
        })
        .catch(err => {
            res.status(400).send("cat cannot be hosted");
        });
});

//
