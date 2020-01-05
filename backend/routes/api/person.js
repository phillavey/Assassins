const express = require('express');
const router = express.Router();

const Person = require('../../models/people');

router.get('/', (req,res) => {
    Person.find()
    .then(person => res.json(person))
});



router.post('/', (req,res) => {
    const {name, target} = req.body;
    const newPerson = new Person({
        name: name,
        target: target
    });

    newPerson.save()
    .then(person => res.json(person));
});


module.exports = router;