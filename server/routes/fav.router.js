const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')


router.get('/:id', (req, res) => {
  console.log('req.user:', req.user);
  pool
  .query (`SELECT * FROM "favorite" WHERE "id"=$1;`)
  .then ((results) => res.send(results.rows))
  .catch ((error) => {
    console.log('ERROR selecting from "Favorite"', error);
    res.sendStatus(500);
  });
});

router.post('/', rejectUnauthenticated, (req, res) => {
  console.log('req.params.id:', req.params.id)
  console.log('req.user.id:', req.user.id);
  console.log('req.body:', req.body);

  const postQuery = `
  INSERT INTO "favorite" ("user_id", "hat_id")
  VALUES ($1, $2)
  `;
  const postValues = [req.user.id, req.body.id]

  pool.query(postQuery, postValues)
  .then(() => res.sendStatus(201))
  .catch((error) => {
    console.log('error POST fav', error);
    res.sendStatus(500);
  });
});

module.exports = router;