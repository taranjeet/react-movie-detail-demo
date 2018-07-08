import React from 'react';

import movies from '../data.js';

const MovieDetail = (props) => {

    const movieId = parseInt(props.match.params.number, 10);

    const movie = movies.filter(movie => {
        if (movie.id === movieId) {
            return movie;
        }
        return false;
    });

    return (
        <p>
            <h3>{movie[0].name}</h3>
            <h6>{movie[0].year}</h6>
        </p>);

}

export { MovieDetail };
