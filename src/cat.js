const mongoose = require('mongoose');
const Schema = require(mongoose.Schema);

const CatSchema = new Schema({ // DB document blueprint
    id: Number,
    catName: String,
    catType: String,
    catIsFriendly: Boolean
});

const Cat = mongoose.model('cat', CatSchema); // DB document instance Felix and Tyson are 2 separate instances of the same Schema blueprint

module.exports = Cat;
