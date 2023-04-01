const express = require('express');
const mongoose = require("mongoose")
const router = express.Router();

router.use(express.urlencoded({extended: false}));

const Animal = require("../models/animal")

// INEX route aka Retrn ALL
router.get('/animals', (req, res) => {
    Animal.find()
    .then((animals) => {
        console.log(animals)
        res.render('index.ejs', {animals})
    })
    
})

// FORM TO CREATE A NEW
router.get('/new', (req, res) => {
    res.render("new.ejs")
})

// POST route
router.post('/', (req, res) => {
    Animal.create(req.body)
    .then((newAnimal) => {
        console.log(newAnimal)
        res.redirect('/animals');
    })
  
})


//edit
router.get("/:indexOfAnimalsArray/edit", (req, res)=>{
    res.render("edit.ejs", {
        animal: animals[req.params.indexOfanimalsArray], 
        index: req.params.indexOfanimalsArray})

});


//update 
router.put("/:indexOfAnimalsArray", (req, res)=>{
    animals[req.params.indexOfAnimalsArray] = req.body;
    res.redirect("/animals")
})


//delete
router.delete("/:indexOfAnimalsArray", (req, res)=>{
    animals.splice(req.params.indexOfAnimalsArray, 1); 
    res.redirect("/animals") 
    });

// SHOW returns one item
router.get('/:id', (req, res) => {
    console.log(req.params);
    const animal = animals[req.params.id];
    console.log(animal);
    res.render("animals/show.ejs", {animal: animal});
})




module.exports = router;