import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

function MovieDetail(movie) {
   
    const dispatch = useDispatch();
    const {id} = useParams();
    const details = useSelector(store => store.details)
    // const [movieDetail, setMovieDetail] = useState([])

    console.log('id is:', id)
    // console.log('movieDetail is:', movieDetail)
    

    useEffect(() => {
        dispatch({ type: 'FETCH_DETAILS' });
        // getMovieDetail();
    }, [])
   
    // const getMovieDetail = () => {
    //     axios.get(`/detail/${id}`)
    //     .then(response => {
    //         // setMovieDetail(response.data);
    //         // console.log('Success getting movie detail', movieDetail)
    //     })
    //     .catch(error => {
    //         console.log('Error getting movie detail:', error)
    //     })
    // }

    return (
        <>
        <h1>{movie.title}</h1>
        
        </>
    )


}

export default MovieDetail