const express = require('express');
const router = express.Router();
const uuid = require('uuid');
let users = require('../../users/users.json');

router.get('/', (req, res) => {
    res.json(users);
});


router.get('/:id', (req, res) => {
    const found = users.data.filter(user => user.id === parseInt(req.params.id));
    if(found.length) {
        res.json(found);
    } else {
        res.sendStatus(400);
    }
});

router.delete('/:id', (req, res) => {
    const found = users.data.filter(user => user.id !== parseInt(req.params.id));
    if(found) {
        res.json(found);
    }
});

module.exports = router;
