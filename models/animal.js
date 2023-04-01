//import our database connection
const mongoose = require("mongoose");

//import Schema
// const Schema = mongoose.Schema;

//create a animal schema
const animalSchema = mongoose.Schema({
    species: String,
    extinct: Boolean,
    location: String,
    lifeExpectancy: Number
},{timestamps: true});

//create animal model
const Animal = mongoose.model("Animal", animalSchema, "animals");

module.exports = Animal;