import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Typography } from '@mui/material';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({ type: 'FETCH_GENRES' });
    }, []);


    return (
        <main>
            <h2>MovieList</h2>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <Typography variant="h6">{movie.title}</Typography>
                           <Link to={`/detail/${movie.id}`}>
                           <img src={movie.poster} alt={movie.title}/>
                           </Link> 
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;