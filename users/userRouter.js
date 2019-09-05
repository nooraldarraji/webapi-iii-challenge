const express = require('express');
const userDb = require('./userDb')

const router = express.Router();
router.use(express.json());

router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {
    userDb.get()
        .then(results => {
            res.status(200).json(results)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

router.get('/:id', validateUserId, (req, res) => {
    res.status(200).json(req.user)
    res.send(`<h2>ok this is id</h2>`)
});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {
    const userId = req.params.id;
    userDb.getById(userId)
        .then(results => {
            console.log(results)
            if (results === undefined) {
                res.status(400).json({ message: "Invalid user ID" })
            } else {
                req.user = results
                next();
            }
        })

};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
