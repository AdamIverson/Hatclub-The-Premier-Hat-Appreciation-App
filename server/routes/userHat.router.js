const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// the user hat router is for getting all of the hats that a user
// has uploaded to hatclub and displaying them on the Profile/User page
// could this be done in the hat router? probably
// why is this here if it could be in the hat router? because I put it here and it works

router.get("/", (req, res) => {
  console.log("get fav route req.user:", req.user);
  console.log("req.params.id:", req.params.id);
  
  const idToGet = req.user.id;
  const sqlText = `
  SELECT * FROM "hat"
    WHERE "creator_id"=$1;
  `;
  pool
    .query(sqlText, [idToGet])
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log('ERROR selecting from "userHats"', error);
      res.sendStatus(500);
    });
});

module.exports = router;