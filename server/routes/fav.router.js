const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

// GET all of the favorited photos for the logged-in user
router.get("/:id", rejectUnauthenticated, (req, res) => {
  console.log("fav.router GET req.user.id:", req.user.id);

  const idToGet = req.user.id;
  const sqlText = `
  SELECT * FROM "hat"
    JOIN "favorite"
    ON "hat"."id"="favorite"."hat_id"
    WHERE "user_id"=$1;
  `;
  pool
    .query(sqlText, [idToGet])
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log('ERROR selecting from "Favorite"', error);
      res.sendStatus(500);
    });
});

// POST route to ADD hats to the favorite table
router.post("/", rejectUnauthenticated, (req, res) => {
  console.log("req.user.id:", req.user.id);

  const postQuery = `
  INSERT INTO "favorite" ("user_id", "hat_id")
  VALUES ($1, $2)
  `;
  const postValues = [req.user.id, req.body.hat_id];

  pool
    .query(postQuery, postValues)
    .then(() => res.sendStatus(201))
    .catch((error) => {
      console.log("error POST fav", error);
      res.sendStatus(500);
    });
});

router.delete("/:id", rejectUnauthenticated, (req, res) => {
  //req.params as "id" value of the item
  console.log("req.params", req.params.id);
  // //req.user.id as value of "user_id"
  // console.log("router.delete req.body.id:", req.body.id);

  //query SELECT * FROM "hat" WHERE "id" = req.params.id

  const query = `DELETE FROM "favorite" WHERE "hat_id"=$1 AND "user_id"=$2;`;
  const values = [req.params.id, req.user.id];
  pool
    .query(query, values)
    .then(() => res.sendStatus(202))
    .catch((error) => {
      console.log("DELETE server error:", error);
    });
});

module.exports = router;
