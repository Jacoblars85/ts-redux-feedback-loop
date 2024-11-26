const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// TODO: This route adds a new feedback entry
router.post('/', (req, res) => {
    const sqlQueryText = `
     INSERT INTO "feedback"
          ("feeling", "understanding", "support", "comments")
          VALUES
          ($1, $2, $3, $4);
    `
    const sqlValues = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments];

    pool.query(sqlQueryText, sqlValues)
        .then((result) => {
            res.sendStatus(201);
            console.log('POST successful');
        }).catch((err) => {
            console.log('error posting things', err);
            res.sendStatus(500);
        })
})


// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', (req, res) => {
    console.log('testing')
    const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
    pool.query(sqlText).then(result => {
        res.send(result.rows)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;
