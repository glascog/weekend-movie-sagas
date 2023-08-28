const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  console.log('Inside server side genres get')
  const queryText = `SELECT movies.id, movies.title, STRING_AGG(genres.name, ', ') AS genres
  FROM "movies"
  JOIN movies_genres ON movies.id=movies_genres.movie_id
  JOIN genres ON movies_genres.genre_id=genres.id
  GROUP BY movies.id, movies.title
  ORDER BY movies.id ASC`;
;
  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('Error completing genres query', error)
      res.sendStatus(500);
    })  
  });

module.exports = router;