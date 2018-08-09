import Person from '../models/person';
import cuid from 'cuid';

const PersonController = {};

PersonController.get = async (req, res) => {
    try{
        await Person.find().sort('-created').exec((err, persons) => {
            if (err) {
                res.status(500).send(err);
            }
            res.json({ persons });
        });
    }
    catch(err){
        res.send(err);
    }
}

PersonController.getById = async (req, res) => {
    try{
        Person.findOne({ cuid: req.params.cuid }).exec((err, person) => {
            if (err) {
                res.status(500).send(err);
            }
            res.json({ person });
        });
    }
    catch(err){
        res.send(err);
    }
}

PersonController.add = async (req, res) => {
    try {
        const newPerson = new Person(req.body.person);
        newPerson.cuid = cuid();
        newPerson.save((err, saved) => {
            if (err) {
                res.status(500).send(err);
            }
            res.json({ person: saved });
        });
    }
    catch (err) {
        res.send(err);
    }
}

PersonController.update = async (req, res) => {
    try {

        Person.findOne({ cuid: req.params.cuid }).exec((err, person) => {
            if (err) {
                res.status(500).send(err);
            } else {
                // Save
                person.firstName = req.body.person.firstName;
                person.lastName = req.body.person.lastName;
                person.age = req.body.person.age;
                person.gender = req.body.person.gender;
                person.save((err, saved) => {
                    if (err) {
                        res.status(500).send(err)
                    }
                    res.json({ person: saved });
                });
            }
        });
    }
    catch (err) {
        res.send(err);
    }
}

PersonController.inactivate = async (req, res) => {
    try {
        Person.findOne({ cuid: req.params.cuid }).exec((err, person) => {
            if (err) {
                res.status(500).send(err);
            }
            person.active = false;
            //save
            person.save((err, saved) => {
                if (err) {
                    res.status(500).send(err)
                }
                //inactive
                res.json({ person: saved });
            });
        });
    }
    catch (err) {
        res.send(err);
    }
}

export default PersonController;
