const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

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