import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

function MovieDetail() {
   
    const dispatch = useDispatch();
    const {id} = useParams();

    const movie = useSelector(store => store.movies[id - 1]);
    const genre = useSelector(store => store.genres[id - 1]);

    console.log('id is:', id)
    

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({ type: 'FETCH_GENRES' });
       
    }, [])
   
   

    return (
        <>
        <h1>{movie.title}</h1>
        <h2>{genre.genres}</h2>
        <img src={movie.poster} alt={movie.title}/>

        
        </>
    )


}

export default MovieDetail