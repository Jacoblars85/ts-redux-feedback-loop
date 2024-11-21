var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');
// TODO: This route adds a new feedback entry
router.post('/', function (req, res) {
});
// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', function (req, res) {
    console.log('testing');
    var sqlText = "SELECT * FROM \"feedback\" ORDER BY \"id\"";
    pool.query(sqlText).then(function (result) {
        res.send(result.rows);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(500);
    });
});
module.exports = router;
