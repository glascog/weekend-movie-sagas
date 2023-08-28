import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';

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
        <Card sx={{ display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "20px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    borderRadius: "8px"
                 }}>
            <CardHeader 
                component = {Typography}
                title = {movie.title}
                subheader = {genre.genres}
            >
            </CardHeader>
                
                <Typography>{movie.description}</Typography>

                <CardMedia  component="img" 
                            image={movie.poster} 
                            alt={movie.title}
                            sx={{width: "200px",
                                height: "300px",
                                objectFit: "cover"}}
                >
                </CardMedia>
                <Link to={'/'}>
                <Button>Back to Movies List</Button>
                </Link>
        </Card>

        
        </>
    )


}

export default MovieDetail