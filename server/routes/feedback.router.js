var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');
// TODO: This route adds a new feedback entry
router.post('/', function (req, res) {
    var sqlQueryText = "\n     INSERT INTO \"feedback\"\n          (\"feeling\", \"understanding\", \"support\", \"comments\")\n          VALUES\n          ($1, $2, $3, $4);\n    ";
    var sqlValues = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments];
    pool.query(sqlQueryText, sqlValues)
        .then(function (result) {
        res.sendStatus(201);
        console.log('POST successful');
    }).catch(function (err) {
        console.log('error posting things', err);
        res.sendStatus(500);
    });
});
//Delete route
router.delete('/:id', function (req, res) {
    var sqlQueryText = "\n    DELETE FROM \"feedback\"\n        WHERE \"id\" = $1;\n  ";
    var sqlValues = [req.params.id];
    pool.query(sqlQueryText, sqlValues)
        .then(function (result) {
        res.sendStatus(200);
    })
        .catch(function (err) {
        console.log("DELETE /feedback SQL query failed: ", err);
        res.sendStatus(500);
    });
});
// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', function (req, res) {
    var sqlText = "SELECT * FROM \"feedback\" ORDER BY \"id\"";
    pool.query(sqlText).then(function (result) {
        res.send(result.rows);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(500);
    });
});
module.exports = router;
