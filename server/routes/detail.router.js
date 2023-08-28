// const express = require('express');
// const router = express.Router()
// const axios = require('axios');
// const pool = require('../modules/pool')


// router.get('/:id', (req, res) => {
//     console.log('inside detail get')
    
//     const detailQueryParams = req.params.id;
//     const getDetailQueryText = `SELECT movies.title, movies.poster, movies.description, genres.name
//     FROM movies
//     JOIN movies_genres ON movies.id = movies_genres.movie_id
//     JOIN genres ON movies_genres.genre_id = genres.id
//     WHERE movies.id = $1;`
//     console.log('req.params.id:', req.params.id);

//     pool.query(getDetailQueryText, [detailQueryParams])
//     .then((result) => {
//         res.send(result.rows);
//     })
//     .catch((error) => {
//         console.log('Error on detail query:', error)
//         res.sendStatus(500);
//     });
// })

// module.exports = router;