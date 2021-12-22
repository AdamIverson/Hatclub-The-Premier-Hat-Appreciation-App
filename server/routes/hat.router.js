const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

router.post('/', rejectUnauthenticated, (req, res) => {
  console.log(req.user);
  console.log(req.body);
  
  const postQuery = `
  INSERT INTO "hat" ("description", "photo_url", "hat_color", "hat_style", "hat_fabric", "hat_vibe")
  VALUES ($1, $2, $3, $4, $5, $6)
  `;
  const postValues = [req.body.description, req.body.photo_url, req.body.hat_color, req.body.hat_style, req.body.hat_fabric, req.body.hat_vibe]

  pool.query(postQuery, postValues)
  .then(() => res.sendStatus(201))
  .catch((error) => {
    console.log('error POST hat:', error);
    res.sendStatus(500);
  });
});

module.exports = router;