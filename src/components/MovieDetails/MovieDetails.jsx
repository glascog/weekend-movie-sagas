import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MovieDetails() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);

    

}

export default MovieDetails