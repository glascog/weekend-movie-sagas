const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  console.log('Inside server side genres get')
  const queryText = 'SELECT * FROM genres';
  pool.query(queryText)
    .then((result) => {res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error completing genres query', error)
      res.sendStatus(500);
    })  
  });

module.exports = router;