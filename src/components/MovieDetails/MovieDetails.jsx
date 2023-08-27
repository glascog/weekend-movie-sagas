import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function MovieDetails() {
    
    const dispatch = useDispatch();
    const {id} = useParams();
    // const movies = useSelector(store => store.movies);
    // const genres = useSelector(store => store.genres);

    useEffect(() => {
        dispatch({})
    })
   
    return (
        <>
        <h1></h1>
        
        </>
    )


}

export default MovieDetails