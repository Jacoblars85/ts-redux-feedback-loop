const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// TODO: This route adds a new feedback entry
router.post('/', (req: any, res: any) => {
    const sqlQueryText = `
     INSERT INTO "feedback"
          ("feeling", "understanding", "support", "comments")
          VALUES
          ($1, $2, $3, $4);
    `
    const sqlValues = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments];

    pool.query(sqlQueryText, sqlValues)
        .then((result: any) => {
            res.sendStatus(201);
            console.log('POST successful');
        }).catch((err: any) => {
            console.log('error posting things', err);
            res.sendStatus(500);
        })
})

//Delete route
router.delete('/:id', (req: any, res: any) => {
    const sqlQueryText = `
    DELETE FROM "feedback"
        WHERE "id" = $1;
  `
  const sqlValues = [req.params.id]
 
  pool.query(sqlQueryText, sqlValues)
    .then((result: any) => {
      res.sendStatus(200)
    })
    .catch((err: any) => {
      console.log(`DELETE /feedback SQL query failed: `, err)
      res.sendStatus(500)
    })
})

// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', (req: any, res: any) => {
    const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
    pool.query(sqlText).then((result: any) => {
        res.send(result.rows)
    }).catch((err: any) => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;
