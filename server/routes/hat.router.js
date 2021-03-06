const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

// GET route for all of the hats in the hats table
// this route is unprotected
router.get("/", (req, res) => {
  console.log("req.user", req.user);
  pool
    .query(`SELECT * FROM "hat";`)
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log('ERROR SELECTING FROM "HAT"', error);
      res.sendStatus(500);
    });
});

// POST route for adding hats
// creator_id is pulled from req.user.id
router.post("/", rejectUnauthenticated, (req, res) => {
  console.log(req.user);
  console.log(req.body);

  const postQuery = `
  INSERT INTO "hat" ("description", "photo_url", "hat_color", "hat_style", "hat_fabric", "hat_vibe", "creator_id")
  VALUES ($1, $2, $3, $4, $5, $6, $7)
  `;
  const postValues = [
    req.body.description,
    req.body.photo_url,
    req.body.hat_color,
    req.body.hat_style,
    req.body.hat_fabric,
    req.body.hat_vibe,
    req.user.id,
  ];

  pool
    .query(postQuery, postValues)
    .then(() => res.sendStatus(201))
    .catch((error) => {
      console.log("error POST hat:", error);
      res.sendStatus(500);
    });
});

router.delete("/:id", (req, res) => {

  pool
    .query(`SELECT * FROM "hat" WHERE "id"=$1`, [req.params.id])
    .then((result) => {
      console.log(result.rows);
      //access the "user_id" in .then(result)
      const authID = result.rows[0].creator_id;
      console.log(authID);

      if (authID === req.user.id) {
        const query2 = `DELETE FROM "hat" WHERE "id"=$1;`;
        const values2 = [req.params.id];
        pool
          .query(query2, values2)
          .then(() => res.sendStatus(202))
          .catch((error) => {
            console.log("DELETE server error:", error);
          });
      } else {
        //catch and send_status(4XX) don't have authentication
        res.sendStatus(400);
      }
    })
    //first query catch
    .catch((error) => {
      console.log(error);
    });
});

// look at this, a real live PUT route in the wild
// id number of hat passed in params
router.put("/:id", rejectUnauthenticated, (req, res) => {
  
  const query2 = `UPDATE "hat"
  SET "description"=$1, "photo_url"=$2, "hat_color"=$3, "hat_style"=$4, "hat_fabric"=$5, "hat_vibe"=$6
  WHERE "id"=$7;`;
  const values2 = [
    req.body.description,
    req.body.photo_url,
    req.body.hat_color,
    req.body.hat_style,
    req.body.hat_fabric,
    req.body.hat_vibe,
    req.params.id,
  ];
  pool
    .query(query2, values2)
    .then(() => res.sendStatus(202))
    .catch((error) => {
      console.log("error:", error);
    });
});

module.exports = router;
