const mongoose = require('mongoose'); // requiring our package

mongoose.connect('mongodb://localhost:27017/Cats'); // establishing the connection
mongoose.connection
    .once('open', () => console.log('Connection established'))
    .on('error', (error) => {
        console.log('Warning : ' + error); 
});

beforeEach((done) => {
    mongoose.connection.collections.FeralCats.drop(() => {
        done();
    }); //clean database before testing
});
